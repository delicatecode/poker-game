import { CardSuit } from "../types/card";

export const cardSuit = ["♦","♥","♣","♠"];
export const cardValue = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
export const cardColor = ["#DD5964", "#483F50"]


const Spade: CardSuit = {
  key: 's',
  value: 's',
  label: '♠',
  color: '#483F50'
}


const Clover: CardSuit = {
  key: 'c',
  value: 'c',
  label: '♣',
  color: '#483F50'
}


const Diamond: CardSuit = {
  key: 'd',
  value: 'd',
  label: '♦',
  color: '#DD5964',
}


const Heart: CardSuit = {
  key: 'h',
  value: 'h',
  label: '♥',
  color: '#DD5964',
}


const Suit = {
  's': Spade,
  'c': Clover,
  'd': Diamond,
  'h': Heart,
}


export {
  Suit,
  Spade,
  Clover,
  Diamond,
  Heart
}
