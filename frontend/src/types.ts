export type SpeakerSide = "left" | "right";

export interface Participant {
  id: string;
  name: string;
  color: string;
  side: SpeakerSide;
  avatar?: string;
}

export type MessageType = "text" | "system" | "image" | "audio";

export interface Message {
  id: string;
  senderId: string;
  content: string;
  type: MessageType;
  timestamp?: string;
  scene?: string;
}

export interface ChatStyle {
  id: string;
  name: string;
  accent: string;
  background: string;
  bubbleLeft: string;
  bubbleRight: string;
}

export interface TemplateCard {
  id: string;
  title: string;
  tags: string[];
  description: string;
  preview: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  tags: string[];
  preview: string;
  collection?: string;
  scenes?: { id: string; title: string; note?: string }[];
}
