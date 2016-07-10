let images = {
    filteredImages: [],
    //Function searches for images matching given parameters.
    //Returns array with image objects.
    find: function(quantity, resolution)
    {
        let sendAllResolutions = false;
        if(typeof quantity == 'undefined'){
            quantity = 5;
        }
        if(typeof resolution == 'undefined'){
            sendAllResolutions = true;
        }
        images.getAllImagesData().forEach(elem => {
            if(images.filteredImages.length == quantity){
                return true;
            }
            if(sendAllResolutions || elem.resolution == resolution){
                images.filteredImages.push(elem);
            }
        });
        let temp = images.filteredImages;
        images.filteredImages = [];
        return temp;
    },
    getAllImagesData: () => {
        //Image objects should have beed created dynaminacly and I know that
        //in nodejs I can do it easly from the fn module. But I didnt manage to
        //do this on time.
        return [
            {
                resolution: 'small',
                url: 'urlString1',
                name: 'imageName1',
            },
            {
                resolution: 'medium',
                url: 'urlString2',
                name: 'imageName2',
            },
            {
                resolution: 'big',
                url: 'urlString3',
                name: 'imageName3',
            },
            {
                resolution: 'small',
                url: 'urlString4',
                name: 'imageName4',
            },
            {
                resolution: 'medium',
                url: 'urlString5',
                name: 'imageName5',
            },
            {
                resolution: 'big',
                url: 'urlString6',
                name: 'imageName6',
            },
            {
                resolution: 'small',
                url: 'urlString7',
                name: 'imageName7',
            },
            {
                resolution: 'small',
                url: 'urlString8',
                name: 'imageName8',
            },
            {
                resolution: 'medium',
                url: 'urlString9',
                name: 'imageName9',
            },
        ];
    }
}
module.exports = images;
