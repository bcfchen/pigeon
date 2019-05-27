import AssetUploadRequest from './AssetUploadRequest';
class AssetUploadRequestBuilder {
    init(folderId) {
        this.newRequest = {
            folderId,
            context: {
                secondaryUse: true,
                prePostApproval: true,
            },
        };
        return this;
    }

    withUserId(userId) {
        this.newRequest.userId = userId;
        return this;
    }

    withProjectId(projectId) {
        this.newRequest.context.projectId = projectId;
        return this;
    }

    withFileAsync(file) {
        const builder = this;
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                console.log('resolved ', e);
                builder.newRequest.newfileAsString = e.target.result;
                builder.newRequest.filename = file.name;
                resolve(builder);
            };
            reader.readAsDataURL(file);
        });
    }

    withContext(contextProperties) {
        this.context = contextProperties;
        return this;
    }

    buildwithFileAsync(file) {
        const builder = this;
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (e) => {
                builder.newRequest.fileAsString = e.target.result;
                builder.newRequest.filename = file.name || file.filename;
                builder.newRequest.thumbnailUrl = window.URL.createObjectURL(file);
                let assetUploadRequest = new AssetUploadRequest(builder.newRequest);
                if (/.mp4/.test(file.name)) {
                    this.getImage(builder.newRequest.thumbnailUrl, assetUploadRequest, resolve);
                } else {
                    resolve(assetUploadRequest);
                }
            };
            reader.readAsDataURL(file);
        });
    }

    getImage(url, assetUploadRequest, resolvePromise) {
        var video = document.createElement('video');
        video.addEventListener('loadeddata', function () {
            snapImage();
        });
        var snapImage = function () {
            var canvas = document.createElement('canvas');
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas.getContext('2d').drawImage(video, 0, 0, canvas.width, canvas.height);
            var image = canvas.toDataURL();
            assetUploadRequest.setThumbnailUrl(image);
            resolvePromise(assetUploadRequest);
        };
        video.preload = 'metadata';
        video.src = url;
    }
}

export default AssetUploadRequestBuilder;