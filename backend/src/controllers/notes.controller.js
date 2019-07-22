const notesCtrl = {};

notesCtrl.getNotes = (req,res)=> res.json({message: []})

notesCtrl.createNote = (req,res)=> res.json({message: 'Note saved'})

notesCtrl.updateNote = (req,res)=> res.json({message: 'Note Updated'})

notesCtrl.deleteNote = (req,res)=> res.json({message: 'Note deleted'})

notesCtrl.getNote = (req,res)=> res.json({title: "asdada"})

module.exports = notesCtrl;