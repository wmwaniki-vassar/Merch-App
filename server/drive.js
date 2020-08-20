var folderName = "handcrafts";

let dApp = DriveApp;

function getImages() {
    // let folders = dApp.getFoldersByName(folderName);
    let folder = dApp.getFolderById("1ljns0FTlcoEUa_LjrGi15SjvnxswPimQ")
    // let folder = folders.next();

    let imagesIter = folder.getFiles();

    let images = [];

    while (imagesIter.hasNext()) {
        let handcraftImage = {};
        let image = imagesIter.next();
        let imageName = image.getName().toUpperCase().split(".")[0];
        let imageId = image.getId();
        handcraftImage.slf = imageName;
        handcraftImage.id = imageId;
        images.push(handcraftImage);
    }
    return images;
}

function upload(e) {
    //upload file to google drive

    var contentType = 'image/jpg';

    var img = e.imageFile.getAs(contentType);

    folder.createFile(img);
}