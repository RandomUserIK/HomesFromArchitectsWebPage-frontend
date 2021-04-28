import {Injectable} from '@angular/core';
import {NgxImageCompressService} from 'ngx-image-compress';
import {CompressedFile} from '../models/compressed-file';

@Injectable()
export class ImageCompressionService {

  constructor(private imageCompressService: NgxImageCompressService) {
  }

  public compressFile(image: any, selectedFile: File): Promise<CompressedFile> {
    return this.executeCompression(image, selectedFile).then(compressedValue => {
      const compressionResult: CompressedFile = {};
      compressionResult.compressionResult = compressedValue;
      compressionResult.file = new File([compressedValue], selectedFile.name, {type: 'image/png'});
      console.log(compressionResult)
      return compressionResult;
    });
  }

  private async executeCompression(image: any, selectedFile: File): Promise<string> {
    const orientation = await this.imageCompressService.getOrientation(selectedFile);
    return this.imageCompressService.compressFile(image, orientation, 50, 50);
  }
}
