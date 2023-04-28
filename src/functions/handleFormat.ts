export const handleFormat = (secNow:number | null):string => {
    if (secNow){
        const hours = Math.floor(secNow / 60 / 60);
        const minutes = Math.floor(secNow / 60) - (hours * 60);
        const sec = secNow % 60;
        return `${hours > 9 ? hours : "0" + hours}:${minutes > 9 ? minutes : "0" + minutes}:${sec > 9 ? sec : "0" + sec}`
    }else {
        return "00:00:00"
    }
}