export class CompetitorUnloading {
    public id: number;
    public plant: string;
    public competitor: string;
    public unloadingDate: Date;
    public product: string;
    public quantity: number;
    public uom: string;
    public documentnumber: string;
    public source: string;
    public deleted: number;
    public insertUserId: number;
    public insertDate: Date;
    public lastUpdateUserId: number;
    public lastUpdateDate: Date;
    public deleteUserId: number;
    public deleteDate: Date;
    constructor();
    constructor(
      $id: number,
      $plant: string,
      $competitor: string,
      $product: string,
      $unloadingDate: Date,
      $documentnumber: string,
      $quantity?: number,
      $uom?: string,
      $source?: string,
      $deleted?: number,
      $insertUserId?: number,
      $insertDate?: Date,
      $lastUpdateUserId?: number,
      $lastUpdateDate?: Date,
      $deleteUserId?: number,
      $deleteDate?: Date
    );
    constructor(
      $id?: any,
      $plant?: any,
      $competitor?: any,
      $product?: any,
      $unloadingDate?: any,
      $documentnumber?: any,
      $quantity?: any,
      $uom?: any,
      $source?: any,
      $deleted?: any,
      $insertUserId?: any,
      $insertDate?: Date,
      $lastUpdateUserId?: any,
      $lastUpdateDate?: any,
      $deleteUserId?: any,
      $deleteDate?: any
    ) {
      this.id = $id;
      this.plant = $plant;
      this.competitor = $competitor;
      this.product = $product;
      this.unloadingDate = $unloadingDate;
      this.documentnumber = $documentnumber;
    }
  }
  