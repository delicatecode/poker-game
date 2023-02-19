

export type Card = {
  key: string;
  suit:
    "♦" | "♥" | "♣" | "♠" | "";
  color:
   "#DD5964" | "#483F50";
  value:
    "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "J" | "Q" | "K" | "A" | "Joker"
}


export type CardSuit = {
  key: 's' | 'c' | 'd' | 'h'
  value: 's' | 'c' | 'd' | 'h'
  label:
    "♦" | "♥" | "♣" | "♠" | "";
} & Pick<Card, 'color'>