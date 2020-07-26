function getImages() {

    let dApp = DriveApp;
    let folders = dApp.getFoldersByName("handcrafts");
    let folder = folders.next();

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