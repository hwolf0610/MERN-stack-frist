import { Component, OnInit } from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-angularmaterial',
  templateUrl: './angularmaterial.component.html',
  styleUrls: ['./angularmaterial.component.scss']
})
export class AngularmaterialComponent implements OnInit {

  constructor(private _bottomSheet: MatBottomSheet) { }
  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetOverviewExampleSheet);
  }

  ngOnInit() {
  }

}

@Component({
  selector: 'homebottom',
  templateUrl: 'homebottom.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
