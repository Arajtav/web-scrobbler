export {};

Connector.artistSelector = '.control-bar .track-info-stack .username-link';
Connector.trackSelector = '.control-bar .track-info-stack .track-title-link';
Connector.currentTimeSelector = '#time';
Connector.durationSelector = '#duration';
Connector.trackArtSelector = '.control-bar img.small-track-avatar';
Connector.playerSelector = ['.player-content'];

Connector.isPlaying = () => {
	const playPauseButtonSelector =
		'.player-content .control-bar .player-controls .play-icon';

	return (
		document
			.querySelector(playPauseButtonSelector)
			?.getAttribute('title') === 'Pause'
	);
};
