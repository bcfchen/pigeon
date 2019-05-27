import JSZip from "jszip";
import Papa from 'papaparse';

export const getMediaType = file => {
    let type = "";
    let fileExtension = file.match(/\.[0-9a-z]+$/i);
    fileExtension = fileExtension !== null ? fileExtension[0] : "";
    switch (fileExtension) {
        case ".png":
            type = "image/png";
            break;
        case ".jpg":
        case ".jpeg":
            type = "image/jpeg";
            break;
        case ".gif":
            type = "image/gif";
            break;
        case ".mp4":
            type = "video/mp4";
            break;
        case ".bm":
        case ".bmp":
            type = "image/bmp";
            break;
        default:
            type = "image/jpeg"
    }
    return type;
};

export const hasZipFiles = files => {
    const zipAssets = files.filter((file) => {
        return /.zip/.test(file.name);
    });
    return zipAssets.length > 0;
};

export const getAllZipFiles = files => {
    const zipAssets = files.filter((file) => {
        return /.zip/.test(file.name);
    });
    return zipAssets;
};

export const getSingleZipFile = files => {
    const zipAssets = files.filter((file) => {
        return /.zip/.test(file.name);
    });
    return zipAssets[0] || undefined;
};

export const extractZipArchive = zipFile => {
    let new_zip = new JSZip();
    return new_zip.loadAsync(zipFile)
        .then(function (zipArtifact) {
            let zipFilesProcess = Object.keys(zipArtifact.files)
                .filter((file) => {
                    return !/__MACOSX/.test(file) && /\.(jpe?g|png|gif)$/gi.test(file)
                })
                .map(file => {
                    return zipArtifact.files[file].async("blob").then((blob) => {
                        blob.filename = file.indexOf('/') > -1 ? file.split('/')[1] : file;
                        return blob;
                    });
                });
            return zipFilesProcess;
        });
};

export const extractZipArchiveAsync = async zipFile => {
    const newZip = new JSZip();
    const zipArtifact = await newZip.loadAsync(zipFile);
    const filteredFiles = Object.keys(zipArtifact.files)
        .filter(file => !/__MACOSX/.test(file) && !/.*\/$/.test(file));
    const fileToBlobRequests = filteredFiles.map(file => fileToBlob(file, zipArtifact));
    return Promise.all(fileToBlobRequests);
};

const fileToBlob = (file, zipArtifact) => {
    return zipArtifact.files[file]
        .async("blob")
        .then((blob) => {
            blob.filename = file.indexOf('/') > -1 ? file.split('/')[1] : file;
            return blob;
        });
};

export const csvToJson = csvFile => {
    return new Promise((resolve, reject) => {
        Papa.parse(csvFile, {
            skipEmptyLines: true,
            complete: (response) => {
                try {
                    const headerRow = response.data[10]; // 10th row of CSV is where the header names reside
                    const dataRows = response.data.splice(11); // data starts from 11th row of data
                    const jsonRows = [];
                    dataRows.forEach((dataRow) => {
                        const jsonObj = {};
                        headerRow.forEach((cell, index) => {
                            jsonObj[cell] = dataRow[index];
                        });
                        jsonRows.push(jsonObj);
                    });
                    const nonEmptyRows = jsonRows.filter(row => row.filename && row.filename.length > 0);
                    resolve(nonEmptyRows);
                } catch (err) {
                    reject(err);
                }
            }
        });
    });
}