import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@capacitor-community/barcode-scanner';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss'],
})
export class ScannerComponent  implements OnInit {

  result:any;
  scanActive = false;

  constructor() { }

  async startScanner(){
    const result = await BarcodeScanner.startScan();
    if(result.hasContent){
      this.result = result.content;
      this.scanActive = false;
      console.log(result.content);
    }
  }


  async stopScanner(){
    await BarcodeScanner.stopScan();
  }

  ngOnInit() {}

}
