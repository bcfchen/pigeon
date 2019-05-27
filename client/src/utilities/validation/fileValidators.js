
export const validateRegularFiles = async (files) => {
    return new Promise((resolve) => {
        for (let ii = 0; ii < files.length; ii++) {
            const fileToValidate = files[ii];
            const { name, filename } = fileToValidate;
            const fileName = name || filename;
            const fileInvalid = !/\.(jpe?g|png|gif|mp4)$/gi.test(fileName);
            if (fileInvalid) {
                resolve({
                    invalidFile: fileName,
                    isValid: false
                });
            }
        }

        resolve({
            invalidFile: undefined,
            isValid: true
        });
    });
}
