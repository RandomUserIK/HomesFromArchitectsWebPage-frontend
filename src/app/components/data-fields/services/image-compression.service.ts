import {Injectable} from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';
import {CompressedFile} from '../models/compressed-file';

@Injectable()
export class ImageCompressionService {

  constructor(private imageCompressService: NgxImageCompressService) {
  }

  private static dataURItoBlob(dataURI: string) {
    const byteString = window.atob(dataURI);
    const arrayBuffer = new ArrayBuffer(byteString.length);
    const int8Array = new Uint8Array(arrayBuffer);
    for (let i = 0; i < byteString.length; i++) {
      int8Array[i] = byteString.charCodeAt(i);
    }
    return new Blob([int8Array], {type: 'image/jpeg'});
  }

  public compressFile(image: string, selectedFile: File): Promise<CompressedFile> {
    return this.executeCompression(image, selectedFile).then(compressedValue => {
      const compressionResult: CompressedFile = {};
      compressionResult.compressionResult = compressedValue;
      compressionResult.file = new File(
        [ImageCompressionService.dataURItoBlob(compressedValue.split(',')[1])],
        selectedFile.name,
        {type: 'image/jpeg'});
      return compressionResult;
    });
  }

  private async executeCompression(image: string, selectedFile: File): Promise<string> {
    const orientation = await this.imageCompressService.getOrientation(selectedFile);
    return this.imageCompressService.compressFile(image, orientation, 50, 50);
  }
}
