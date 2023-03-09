declare global {
	interface Window {
		YT: {
			Player: new (element: string, options: YT.PlayerVars) => YT.Player;
		};
	}
}

type YTEvent<T extends keyof YT.PlayerEventMap> = YT.PlayerEventMap[T] & {
	target: YT.Player;
};

type YTErrorEvent = YTEvent<'onError'>;
type YTStateChangeEvent = YTEvent<'onStateChange'>;
type YTPlaybackQualityChangeEvent = YTEvent<'onPlaybackQualityChange'>;
type YTPPlaybackRateChangeEvent = YTEvent<'onPlaybackRateChange'>;
type YTApiChangeEvent = YTEvent<'onApiChange'>;
type YTCueChangeEvent = YTEvent<'onCueChange'>;
type YTToggleFullScreenEvent = YTEvent<'onToggleFullScreen'>;

type YTPlayerEventHandler<T extends keyof YT.PlayerEventMap> = (event: YTEvent<T>) => void;
