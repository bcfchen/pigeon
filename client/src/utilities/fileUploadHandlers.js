import { getSingleZipFile, extractZipArchiveAsync, getMediaType } from './fileUploadUtils';
import { validateRegularFiles } from './validation/fileValidators';

export const handleRegularFiles = async (files) => {
    const validationResults = await validateRegularFiles(files);
    if (!validationResults.isValid) {
        throw new Error(validationResults.invalidFile);
    }
    return files;
};

export const handleZipFile = async (files) => {
    const zipFile = getSingleZipFile(files);
    const fileBlobs = await extractZipArchiveAsync(zipFile);
    const validationResults = await validateRegularFiles(fileBlobs);
    if (!validationResults.isValid) {
        throw new Error(validationResults.invalidFile);
    }

    const zipFileOutputs = fileBlobs.map(fileBlob => {
        if (/Trident.*rv:11\./.test(window.navigator.userAgent)) {
            let ieBlob = new Blob([fileBlob], { type: getMediaType(fileBlob.filename) });
            ieBlob.filename = fileBlob.filename;
            return ieBlob;
        } else {
            const isVideo = fileBlob.filename.indexOf('.mp4') > -1;
            return isVideo ? fileBlob : new File([fileBlob], fileBlob.filename, { type: getMediaType(fileBlob.filename) });
        }
    });
    return zipFileOutputs;
};