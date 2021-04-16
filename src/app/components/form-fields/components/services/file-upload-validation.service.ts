import { Injectable } from '@angular/core';

@Injectable()
export class FileUploadValidationService {
  public checkSizeAndFileFormat(file: Blob): string {
    const allowedFileTypes = ['image/png', 'image/jpeg'];
    if (allowedFileTypes.indexOf(file.type) === -1) {
      return  'Súbor, ktorý ste nahrali nieje typu PNG. alebo JPEG';
    }
    if (file.size > 5242880) {
      return 'Súbor, ktorý ste nahrali je väčší ako 5MB';
    }
    return '';
  }
}
