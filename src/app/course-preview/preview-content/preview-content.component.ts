import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preview-content',
  templateUrl: './preview-content.component.html',
  styleUrls: ['./preview-content.component.scss']
})
export class PreviewContentComponent implements OnInit {

  player: YT.Player;
  private id: string = 'ZWJH7JQCjLM';

  savePlayer(player) {
    this.player = player;
    console.log('Vide url: ', player.getVideoUrl());
  }
  onStateChange(event) {
    console.log('player state', event.data);
  }
  constructor() { }

  ngOnInit() {
  }

}
