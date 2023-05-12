<script setup lang="ts">
import {onMounted, ref, provide} from 'vue';
import Footer from './Footer.vue';
import App from './../app';
import Game from './../game';

let engine = ref({});

onMounted(() => {
	engine.value = new Game(new App());
	engine.value.ui.login();
});

provide("engine", {
	engine
});
</script>

<template>
	<div id="game-container">
		<div id="border">
			<div id="canvas">
				<canvas id="background"></canvas>
				<canvas id="entities"></canvas>
				<canvas id="foreground"></canvas>
				<canvas id="cursor"></canvas>
				<canvas id="overlay"></canvas>
				<canvas id="text-canvas"></canvas>
			</div>

			<div id="buttons">
				<ul>
					<li><div id="inventory-button"></div></li>
					<li><div id="achievements-button"></div></li>
					<li><div id="quests-button"></div></li>
					<li><div id="warp-button"></div></li>
					<li><div id="profile-button"></div></li>
					<li><div id="friends-button"></div></li>
					<li><div id="chat-button"></div></li>
					<li><div id="settings-button"></div></li>
				</ul>
			</div>

			<div id="zoom-buttons">
				<button id="zoom-in"></button>
				<button id="zoom-out"></button>
			</div>

			<div id="ability-shortcut" hidden>
				<div id="ability-quickslot1" class="ability-quickslot"></div>
				<div id="ability-quickslot2" class="ability-quickslot"></div>
				<div id="ability-quickslot3" class="ability-quickslot"></div>
				<div id="ability-quickslot4" class="ability-quickslot"></div>
			</div>

			<div id="profile-dialog">
				<div id="state-page" class="page">
					<div id="profile-level" class="profile-info"></div>
					<div id="profile-experience" class="profile-info"></div>
					<ul id="attack-style-list">
						<li class="attack-style-box">
							<div class="attack-style attack-style-stab"></div>
						</li>
						<li class="attack-style-box">
							<div class="attack-style attack-style-slash"></div>
						</li>
						<li class="attack-style-box">
							<div class="attack-style attack-style-defensive"></div>
						</li>
						<li class="attack-style-box">
							<div class="attack-style attack-style-chop"></div>
						</li>
					</ul>
					<div class="profile-slot weapon-slot"></div>
					<div class="profile-slot weapon-skin-slot"></div>
					<div class="profile-slot armour-slot"></div>
					<div class="profile-slot armour-skin-slot"></div>
					<div class="profile-slot pendant-slot"></div>
					<div class="profile-slot ring-slot"></div>
					<div class="profile-slot boots-slot"></div>
					<div class="profile-slot arrows-slot">
						<div id="arrows-count" class="stroke"></div>
					</div>
					<div id="equipment-button"></div>
				</div>

				<div id="skills-page" class="page">
					<div id="profile-info">
						<div class="profile-info-skill-image"></div>
						<div class="profile-info-title stroke"></div>
						<div class="profile-info-details stroke"></div>
					</div>
					<div id="skills-list"><ul></ul></div>
				</div>

				<div id="abilities-page" class="page">
					<ul id="active-abilities">
						<div id="activeability1" class="ability"></div>
						<div id="activeability2" class="ability"></div>
						<div id="activeability3" class="ability"></div>
						<div id="activeability4" class="ability"></div>
						<div id="activeability5" class="ability"></div>
						<div id="activeability6" class="ability"></div>
						<div id="activeability7" class="ability"></div>
						<div id="activeability8" class="ability"></div>
					</ul>

					<ul id="passive-abilities">
						<div id="passiveability1" class="ability"></div>
						<div id="passiveability2" class="ability"></div>
						<div id="passiveability3" class="ability"></div>
						<div id="passiveability4" class="ability"></div>
						<div id="passiveability5" class="ability"></div>
						<div id="passiveability6" class="ability"></div>
						<div id="passiveability7" class="ability"></div>
						<div id="passiveability8" class="ability"></div>
					</ul>
				</div>

				<div id="guild-page" class="page"></div>

				<div id="profile-navigator" class="navigator">
					<div class="previous"></div>
					<div class="next"></div>
				</div>
			</div>

			<div id="settings-page" class="page">
				<div id="sliders">
					<input
						title="Music Volume"
						id="music"
						class="input"
						type="range"
						min="0"
						max="100"
						value="100"
						aria-labelledby="music-volume-text"
					/>
					<input
						title="Sound Volume"
						id="sound"
						class="input"
						type="range"
						min="0"
						max="100"
						value="100"
						aria-labelledby="sound-volume-text"
					/>
					<input
						title="Brightness"
						id="brightness"
						class="input"
						type="range"
						min="0"
						max="100"
						value="100"
						aria-labelledby="brightnessText"
					/>
				</div>

				<div id="texts">
					<p id="music-volume-text">Music Volume</p>
					<p id="sound-volume-text">Sound Volume</p>
					<p id="brightness-text">Brightness</p>
					<p id="audio-enabled-checkbox-text">Audio Enabled</p>
					<p id="low-power-checkbox-text">Low Power Mode</p>
					<p id="debug-mode-checkbox-text">Debug Mode</p>
					<p id="show-names-checkbox-text">Show Names</p>
					<p id="show-levels-checkbox-text">Show Levels</p>
					<p id="disable-region-caching-text">Disable Caching</p>
				</div>

				<div id="info"></div>

				<div id="check-marks">
					<label id="audio-enabled-checkbox" class="check">
						<input type="checkbox" aria-labelledby="audio-enabled-checkbox-text" />
						<span class="checkmark"></span>
					</label>
					<label id="low-power-checkbox" class="check">
						<input type="checkbox" aria-labelledby="low-power-checkbox-text" />
						<span class="checkmark"></span>
					</label>
					<label id="debug-mode-checkbox" class="check">
						<input type="checkbox" aria-labelledby="debug-mode-checkbox-text" />
						<span class="checkmark"></span>
					</label>
					<label id="show-names-checkbox" class="check">
						<input type="checkbox" aria-labelledby="show-names-checkbox-text" />
						<span class="checkmark"></span>
					</label>
					<label id="show-levels-checkbox" class="check">
						<input type="checkbox" aria-labelledby="show-levels-checkbox-text" />
						<span class="checkmark"></span>
					</label>
					<label id="disable-region-caching-checkbox" class="check">
						<input type="checkbox" aria-labelledby="disable-region-caching-text" />
						<span class="checkmark"></span>
					</label>
				</div>
			</div>

			<div id="friends-container" class="page">
				<div id="friends-page">
					<ul id="friends-list"></ul>

					<div id="add-friend" class="add"></div>
					<div id="remove-friend" class="remove"></div>
				</div>

				<div id="popup-container">
					<div id="add-popup">
						<input
							title="Enter a username!"
							id="popup-friend-input"
							class="stroke"
							type="text"
							maxlength="32"
							autocomplete="off"
							data-lpignore="true"
							placeholder="Enter name of player to add..."
						/>
						<div id="popup-friend-confirm" class="confirm"></div>
						<div id="popup-friend-cancel" class="cancel"></div>
					</div>
				</div>
			</div>

			<div id="attack-info">
				<div class="name"></div>
				<div class="details"></div>
				<div class="health"></div>
			</div>

			<div id="map-frame">
				<div id="warp0" class="map-button"></div>
				<div id="warp1" class="map-button"></div>
				<div id="warp2" class="map-button"></div>
				<div id="warp3" class="map-button"></div>
				<div id="warp4" class="map-button"></div>
				<div id="warp5" class="map-button"></div>
				<div id="close-map-frame" class="close"></div>
			</div>

			<div id="inventory">
				<div id="inventory-container">
					<ul></ul>
				</div>
			</div>

			<div id="bank">
				<div id="close-bank" class="close"></div>
				<div id="bank-container">
					<div id="bank-slot"><ul></ul></div>
				</div>
				<div id="bank-inventory-container">
					<div id="bank-inventory-slots">
						<ul></ul>
					</div>
				</div>
			</div>

			<div id="trade-container">
				<div id="close-trade" class="close"></div>
				<div id="trade-player-name" class="stroke"></div>
				<div id="trade-oplayer-name" class="stroke"></div>
				<div id="trade-status"></div>

				<div id="trade-inventory-slots">
					<ul></ul>

					<dialog id="trade-count">
						<div class="dialog-title">Input Amount</div>

						<input title="Count" type="number" class="dialog-count" size="6" maxlength="11" />

						<div class="dialog-buttons">
							<div class="confirm dialog-accept"></div>
							<div class="cancel dialog-cancel"></div>
						</div>
					</dialog>
				</div>
				<div id="trade-player-slots"><ul></ul></div>
				<div id="trade-oplayer-slots"><ul></ul></div>

				<div id="trade-accept" class="accept-button"></div>
			</div>

			<div id="enchant">
				<div id="close-enchant" class="close"></div>
				<div id="confirm-enchant" class="ok"></div>
				<div id="enchant-container">
					<div id="enchant-inventory-slots" class="inventory-slots">
						<ul></ul>
					</div>
				</div>
				<div id="enchant-selected-item"></div>
				<div id="enchant-shards">
					<div id="shards-count" class="item-count"></div>
				</div>
			</div>

			<div id="store">
				<div id="close-store" class="close"></div>
				<div id="store-container">
					<ul></ul>
				</div>

				<div id="store-help"></div>

				<div id="store-inventory-container">
					<div id="store-inventory-slots">
						<ul></ul>
					</div>

					<div id="store-sell-slot">
						<div id="store-sell-slot-text" class="item-count"></div>
					</div>
					<div id="store-sell-slot-return">
						<div id="store-sell-slot-return-text" class="item-count"></div>
					</div>

					<div id="confirm-sell" class="ok-check"></div>
				</div>

				<dialog id="store-buy">
					<div class="dialog-title">Input Buy Amount</div>

					<input title="Count" type="number" class="dialog-count" size="6" maxlength="11" />

					<div class="dialog-buttons">
						<div class="confirm dialog-accept"></div>
						<div class="cancel dialog-cancel"></div>
					</div>
				</dialog>
			</div>

			<div id="equipments" class="container">
				<div id="close-equipments" class="close close-container"></div>
				<div id="equipment-stats"></div>
				<div id="equipment-slots" class="page state-page">
					<div id="equipment-container">
						<div class="profile-slot equip-weapon-slot"></div>
						<div class="profile-slot equip-weapon-skin-slot"></div>
						<div class="profile-slot equip-armour-slot"></div>
						<div class="profile-slot equip-armour-skin-slot"></div>
						<div class="profile-slot equip-pendant-slot"></div>
						<div class="profile-slot equip-ring-slot"></div>
						<div class="profile-slot equip-boots-slot"></div>
						<div class="profile-slot equip-arrows-slot"></div>
					</div>
				</div>

				<div id="player-image-armour" class="player-image"></div>
				<div id="player-image-weapon" class="player-image"></div>

				<div id="player-image-navigator">
					<div class="previous"></div>
					<div class="next"></div>
				</div>

				<div id="attack-stats">
					<p class="title">Attack Stats</p>
					<br />
					<p class="crush">Crush:</p>
					<p class="slash">Slash:</p>
					<p class="stab">Stab:</p>
					<p class="archery">Archery:</p>
					<p class="magic">Magic:</p>
				</div>
				<div id="defense-stats">
					<p class="title">Defense Stats</p>
					<br />
					<p class="crush">Crush:</p>
					<p class="slash">Slash:</p>
					<p class="stab">Stab:</p>
					<p class="archery">Archery:</p>
					<p class="magic">Magic:</p>
				</div>
				<div id="bonuses">
					<p class="title">Bonuses</p>
					<br />
					<p class="accuracy">Accuracy:</p>
					<p class="strength">Strength:</p>
					<p class="archery">Archery:</p>
					<p class="magic">Magic:</p>
				</div>
			</div>

			<div id="achievements" class="container">
				<div id="close-achievements" class="close close-container"></div>
				<div id="achievements-container">
					<ul></ul>
				</div>
			</div>

			<div id="quests" class="container">
				<div id="close-quests" class="close close-container"></div>
				<div id="quests-container">
					<ul></ul>
				</div>
				<div id="quest-log">
					<div id="quest-log-title" class="quest-log-h1 stroke">Quest Title</div>
					<div id="quest-log-shortdesc" class="quest-log-p"></div>
					<div class="quest-log-h1 stroke">Quest Description</div>
					<div id="quest-log-description" class="quest-log-p"></div>
					<div class="quest-log-h1 stroke">Quest Reward</div>
					<div id="quest-log-rewards" class="quest-log-p"></div>
				</div>
			</div>

			<div id="bubbles"></div>

			<div id="notification">
				<div id="notification-text-title"></div>
				<div id="notification-text-description"></div>
			</div>

			<div id="notifications">
				<div id="notify-fade" class="fade"></div>
				<div id="notify">
					<div id="exclamation"></div>
					<div id="notify-done" class="done"></div>
				</div>
				<div id="confirm">
					<div id="question"></div>
					<div id="confirm-done" class="done"></div>
					<div id="cancel"></div>
				</div>
				<div id="message"></div>
			</div>

			<div id="action-container">
				<div id="action-page">
					<div class="action-item-name stroke"></div>

					<div class="action-item-description"></div>

					<ul></ul>
				</div>

				<dialog id="action-drop">
					<div class="dialog-title">Input Drop Amount</div>

					<input title="Count" type="number" class="dialog-count" size="6" maxlength="11" />

					<div class="dialog-buttons">
						<div class="confirm dialog-accept"></div>
						<div class="cancel dialog-cancel"></div>
					</div>
				</dialog>
			</div>

			<div id="interact">
				<ul></ul>
			</div>

			<div id="chat">
				<div id="chat-log"></div>

				<input
					title="Enter your message!"
					id="chat-input"
					type="text"
					maxlength="256"
					autocomplete="off"
					data-lpignore="true"
				/>
			</div>

			<Footer />
			<div id="player-info">
				<div id="health"></div>
				<div id="health-bar"></div>
				<div id="health-info">
					<div id="health-bar-text"></div>
				</div>

				<div id="mana"></div>
				<div id="mana-bar"></div>
				<div id="mana-info">
					<div id="mana-bar-text"></div>
				</div>
			</div>
		</div>
	</div>
</template>
