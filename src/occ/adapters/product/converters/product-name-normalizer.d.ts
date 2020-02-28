import { OccConfig } from '../../../config/occ-config';
import { Occ } from '../../../occ-models/occ.models';
import { Converter } from '../../../../util/converter.service';
import { Product } from '../../../../model/product.model';
import * as ɵngcc0 from '@angular/core';
export declare class ProductNameNormalizer implements Converter<Occ.Product, Product> {
    protected config: OccConfig;
    constructor(config: OccConfig);
    convert(source: Occ.Product, target?: Product): Product;
    protected normalize(name: string): string;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<ProductNameNormalizer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXIuZC50cyIsInNvdXJjZXMiOlsicHJvZHVjdC1uYW1lLW5vcm1hbGl6ZXIuZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7QUFJQTs7Ozs7O0FBS0E7Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2NjQ29uZmlnIH0gZnJvbSAnLi4vLi4vLi4vY29uZmlnL29jYy1jb25maWcnO1xuaW1wb3J0IHsgT2NjIH0gZnJvbSAnLi4vLi4vLi4vb2NjLW1vZGVscy9vY2MubW9kZWxzJztcbmltcG9ydCB7IENvbnZlcnRlciB9IGZyb20gJy4uLy4uLy4uLy4uL3V0aWwvY29udmVydGVyLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gJy4uLy4uLy4uLy4uL21vZGVsL3Byb2R1Y3QubW9kZWwnO1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgUHJvZHVjdE5hbWVOb3JtYWxpemVyIGltcGxlbWVudHMgQ29udmVydGVyPE9jYy5Qcm9kdWN0LCBQcm9kdWN0PiB7XG4gICAgcHJvdGVjdGVkIGNvbmZpZzogT2NjQ29uZmlnO1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogT2NjQ29uZmlnKTtcbiAgICBjb252ZXJ0KHNvdXJjZTogT2NjLlByb2R1Y3QsIHRhcmdldD86IFByb2R1Y3QpOiBQcm9kdWN0O1xuICAgIHByb3RlY3RlZCBub3JtYWxpemUobmFtZTogc3RyaW5nKTogc3RyaW5nO1xufVxuIl19