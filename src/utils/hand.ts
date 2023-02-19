
// Poker Hand Ranking
// // ------------------------------
// 1. Royal StraightFlush Flush 
// 2. Straight Flush
// 3. Four of a Kind
// 4. Full House
// 5. Flush
// 6. Straight
// 7. Three of a Kind
// 8. Two Pair
// 9. Pair
// 10. High Card
// ------------------------------ //


/**
 * ロイヤルストレートフラッシュ
 * - 同じマークのA / K / Q / J / 10
 * @return boolean
 */
const isRoyalStraightFlush = (): boolean => {
  return true;
}


/**
 * ストレートフラッシュ
 * - 同じマークで連番
 * @return boolean
 */
const isStraightFlush = (): boolean => {
  return isStraight() && isFlush();
}


/**
 * フォーカード
 * - 同じ数字が4枚
 * @return boolean
 */
const isFourCard = (): boolean => {
  return true;
}


/**
 * フルハウス
 * - 同じ数字が３枚と同じ数字が２枚の組み合わせ
 * @return boolean
 */
const isFullHouse = (): boolean => {
  return true;
}


/**
 * 同じマークが５枚
 * @return boolean
 */
const isFlush = (): boolean => {
  return true;
}


/**
 * 連番
 * @return boolean
 */
const isStraight = (): boolean => {
  return true;
}


/**
 * スリーカード
 * @return boolean
 */
const isThreeCard = (): boolean => {
  return true;
}


/**
 * ツーペア
 * @return boolean
 */
const isTwoPairs = (): boolean => {
  return true;
}


/**
 * ワンペア
 * @return boolean
 */
const isOnePair = (): boolean => {
  return true;
}



export {
  isRoyalStraightFlush,
  isStraightFlush,
  isFourCard,
  isFullHouse,
  isFlush,
  isStraight,
  isThreeCard,
  isTwoPairs,
  isOnePair
}
