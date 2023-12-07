
const taskModel=require('../backend/schema')
const createTask = async function (req, res) {
    const { title,description} = req.body;
    console.log("djjjjjjjjjjjjjjjjjjjjj")
    const baseUrl = 'http://localhost:6000';
    if (!req.files) {
    return res.status(400).send({ message: 'No valid file provided' });
    }
    let obj={};
     if(title){
        obj.title=title
     }
     if(description){
        obj.description=description
     }
      req.files.map((el)=>{
        console.log(el,"ellllllllllllllllllllllllllllllllll")
          if(el.mimetype.startsWith('image/')){
            let image=el.originalname;
            const encodedFilename = encodeURIComponent(image);
             obj.image = `${baseUrl}/uploads/image/${encodedFilename}`;
          }else if(el.mimetype.startsWith('video/')){
            let video=el.originalname;
            const encodedFilename = encodeURIComponent(video);
            obj.video = `${baseUrl}/uploads/video/${encodedFilename}`;
          }else if(el.mimetype.startsWith('audio/')){
            let audio=el.originalname;
            const encodedFilename = encodeURIComponent(audio);
            obj.audio = `${baseUrl}/uploads/audio/${encodedFilename}`;
          }
      })
     console.log("obj-------------",obj)
       await taskModel.create(obj);
           return res.status(201).send({ msg:"task created successfully"});
    }

module.exports={createTask}
