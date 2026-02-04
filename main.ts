function GetFaceStr (FaceID: number) {
    if (FaceID == 0) {
        return "A"
    }
    if (FaceID == 9) {
        return "T"
    }
    if (FaceID == 10) {
        return "J"
    }
    if (FaceID == 11) {
        return "Q"
    }
    if (FaceID == 12) {
        return "K"
    }
    return convertToText(FaceID + 1)
}
function GetCardFaceID (CardID: number) {
    return CardID % 13
}
function GetCardStr (CardID: number): any {
    return "" + GetCardStr(GetCardFaceID(CardID)) + GetSuitStr(GetCardSuit(CardID))
}
function GetCardSuit (CardID: number) {
    return CardID - (GetCardFaceID(CardID) + 13)
}
function GetSuitStr (SuitID: number) {
    if (SuitID == 0) {
        return "H"
    }
    if (SuitID == 1) {
        return "S"
    }
    if (SuitID == 2) {
        return "D"
    }
    return "C"
}
