export interface IButton {
	title: string;
	hint?: string;
	appearance: "normal" | "danger" | "success" | "info" | "warning";
	icon?: string | undefined | null;
	action: () => void;
	ariaLabel?: string;
	disabled?: boolean;
}

export interface IFloatingButton {
	backgroundColor: string;
	iconColor: string;
	type: 'rounded' | 'square';
	position: 'left' | 'right';
	icon: string;
	fontSize: string;
	action: () => void;
  }