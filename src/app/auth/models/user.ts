export class User {

  constructor(public id: number, private _token: string, private _tokenExpirationDate: Date) {
  }

  get token(): string {
    if (!this._token || new Date() > this._tokenExpirationDate )
      return null;
    return this._token;
  }

}
