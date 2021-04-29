import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadValidationService {

  private allowedFileTypes = ['image/png', 'image/jpeg'];
  private UPLOAD_MAX_SIZE = 41943040;


  public checkSizeAndFileFormat(file: Blob): string {


    if (this.allowedFileTypes.indexOf(file.type) === -1) {
      return 'Súbor, ktorý ste nahrali nieje typu PNG. alebo JPEG';
    }
    if (file.size > this.UPLOAD_MAX_SIZE) {
      return 'Súbor, ktorý ste nahrali je väčší ako 5MB';
    }
    return '';
  }
}
