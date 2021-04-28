export class User {

  constructor(public id: number, private _token: string, private _jwtExpirationDate: Date) {
  }

  get token(): string {
    if (!this._token || new Date() > this._jwtExpirationDate )
      return null;
    return this._token;
  }

}
