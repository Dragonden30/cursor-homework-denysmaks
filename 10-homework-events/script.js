function sounds(key) {
	const soundId =  document.querySelector(`[data-key="${key}"]`);
	const soundName = soundId.id;
	const time = 400;
	if (soundId) {
		const sound = new Audio(`sounds/`+ soundName +`.mp3`);
		sound.play();
		soundId.style.backgroundColor = 'yellow'
        setTimeout(function () {
			soundId.style.backgroundColor = '#A0522D'
		}, time)
	}
}

const keys = document.querySelectorAll('.key');
keys.forEach(element => {
    element.addEventListener("click", function () {
		sounds(this.getAttribute('data-key'));
	});
});

document.addEventListener('keydown', function (event) {
	const keyPushed = event.key;
	sounds(keyPushed);
});
