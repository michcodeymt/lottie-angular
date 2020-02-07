import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-lottie',
  templateUrl: './lottie.component.html',
  styleUrls: ['./lottie.component.scss']
})
export class LottieComponent implements OnInit {
  // Documentation: https://github.com/chenqingspring/ng-lottie
  public lottieConfig;
  public anim: any;
  public animationSpeed = 1;
  price = 2090;
  valor = this.price / 100;

  constructor() {
    this.lottieConfig = {
      path: 'assets/animation/location-gps.json',
      renderer: 'canvas',
      autoplay: true,
      loop: true
    };
  }

  ngOnInit() {
  }

  handleAnimation(anim: any) {
    this.anim = anim;
  }

  stop() {
    this.anim.stop();
  }

  play() {
    this.anim.play();
  }

  pause() {
    this.anim.pause();
  }

  setSpeed(speed: number) {
    this.animationSpeed = speed;
    this.anim.setSpeed(speed);
  }
}
