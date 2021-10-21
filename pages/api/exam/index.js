import Database from "../../../database/db"



const allQuestions = async(req, res) => {
    const AllEntries = await Database.getAll()
    const length = AllEntries.length
    res.status(200).json({data:AllEntries, length})
  }

export default allQuestions