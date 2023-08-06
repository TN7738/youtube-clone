const useTimestampGenerator = str => {
    let timeStamp = "";
    let padNextFlag = false;
    if(str.includes("PT")){
        str = str.split("PT")[1];
        if(str.includes("H")){
            padNextFlag = true;
            timeStamp += str.split("H")[0] + ":";
            str = str.split("H")[1];
        }
        if(str.includes("M")){
            padNextFlag ? timeStamp += str.split("M")[0].padStart(2, '0') + ":" : timeStamp += str.split("M")[0] + ":";
            padNextFlag = true;
            str = str.split("M")[1];
        }
        if(str.includes("S")){
            padNextFlag ? timeStamp += str.split("S")[0].padStart(2, '0') : timeStamp += "0:" + str.split("S")[0].padStart(2, '0')
        }
    }
    return timeStamp;
};

export default useTimestampGenerator;