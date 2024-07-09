 const {Conversation}=require('../models/coversation.model')
const {Message}=require('../models/message.model')
const mongoose = require('mongoose');
const { getReceiverSocketId,io}=require('../Socket/socket');


const getMessages=async(req,res)=>{
    try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;
		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate("messages");

		if (!conversation) return res.status(200).json([]);
		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log("Error in getMessages controller: ", error.message);
		res.status(500).json({ error: "Internal server error" });
	}
}


const sendMessage = async (req, res) => {
	try {
	  const { message } = req.body;
	  const receiverId = req.params.id; 
	  const senderId = req.user._id;
  
	  console.log(`Sender ID: ${senderId}`);
	  console.log(`Receiver ID: ${receiverId}`);
	  if (!mongoose.Types.ObjectId.isValid(senderId) || !mongoose.Types.ObjectId.isValid(receiverId)) {
		return res.status(400).json({ error: 'Invalid sender or receiver ID' });
	  }
	  let conversation = await Conversation.findOne({
		participants: { $all: [senderId, receiverId] },
	  });
  
	  if (!conversation) {
		conversation = await Conversation.create({
		  participants: [senderId, receiverId],
		});
	  }
  
	  // Create new message
	  const newMessage = new Message({
		senderId,
		receiverId,
		message,
	  });
  

	  if (newMessage) {
		conversation.messages.push(newMessage._id);
	  }
		await Promise.all([conversation.save(), newMessage.save()]);
	  
		console.log("line: 60",receiverId)
		const receiverSocketId = getReceiverSocketId(receiverId);
		console.log("line: 62",receiverSocketId)
		if (receiverSocketId) {
		  io.to(receiverSocketId).emit("newMessage", newMessage);
		

  
		return res.status(201).json(newMessage);
	  } else {
		return res.status(400).json({ error: 'Failed to create message' });
	  }
	} catch (error) {
	  console.error('Error creating message:', error);
	  return res.status(500).json({ error: error.message });
	}
  };
  


module.exports=({
    sendMessage,getMessages
})



