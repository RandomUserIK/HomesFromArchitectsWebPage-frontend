import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {FileService} from '../../../admin-view/services/file-service';

@Injectable()
export class LightboxService {

  private SEARCH_PREFIX = 'data:application/octet-stream;base64,';
  private REPLACE_PREFIX = 'data:image/png;base64,';

  private _imageEncoded$: Subject<string> = new Subject<string>();

  constructor(private _fileService: FileService) {
  }

  get imageEncoded(): Subject<string> {
    return this._imageEncoded$;
  }

  public encodeImage(imagePath: string): void {
    this._fileService.getFileFromPath(imagePath).subscribe((imageBlob) => {
      const reader = new FileReader();
      reader.readAsDataURL(imageBlob);
      reader.onloadend = () => {
        this._imageEncoded$.next((reader.result as string).replace(this.SEARCH_PREFIX, this.REPLACE_PREFIX));
      };
    });
  }

}
