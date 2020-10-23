export var Occ;
(function (Occ) {
    /**
     * Defines values for PriceType.
     * Possible values include: 'BUY', 'FROM'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PriceType = <PriceType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let PriceType;
    (function (PriceType) {
        PriceType["BUY"] = "BUY";
        PriceType["FROM"] = "FROM";
    })(PriceType = Occ.PriceType || (Occ.PriceType = {}));
    /**
     * Defines values for ImageType.
     * Possible values include: 'PRIMARY', 'GALLERY'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: ImageType = <ImageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let ImageType;
    (function (ImageType) {
        ImageType["PRIMARY"] = "PRIMARY";
        ImageType["GALLERY"] = "GALLERY";
    })(ImageType = Occ.ImageType || (Occ.ImageType = {}));
    /**
     * Defines values for Fields.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields = <Fields>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields;
    (function (Fields) {
        Fields["BASIC"] = "BASIC";
        Fields["DEFAULT"] = "DEFAULT";
        Fields["FULL"] = "FULL";
    })(Fields = Occ.Fields || (Occ.Fields = {}));
    /**
     * Defines values for Fields1.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields1 = <Fields1>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields1;
    (function (Fields1) {
        Fields1["BASIC"] = "BASIC";
        Fields1["DEFAULT"] = "DEFAULT";
        Fields1["FULL"] = "FULL";
    })(Fields1 = Occ.Fields1 || (Occ.Fields1 = {}));
    /**
     * Defines values for Fields2.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields2 = <Fields2>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields2;
    (function (Fields2) {
        Fields2["BASIC"] = "BASIC";
        Fields2["DEFAULT"] = "DEFAULT";
        Fields2["FULL"] = "FULL";
    })(Fields2 = Occ.Fields2 || (Occ.Fields2 = {}));
    /**
     * Defines values for Fields3.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields3 = <Fields3>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields3;
    (function (Fields3) {
        Fields3["BASIC"] = "BASIC";
        Fields3["DEFAULT"] = "DEFAULT";
        Fields3["FULL"] = "FULL";
    })(Fields3 = Occ.Fields3 || (Occ.Fields3 = {}));
    /**
     * Defines values for Fields4.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields4 = <Fields4>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields4;
    (function (Fields4) {
        Fields4["BASIC"] = "BASIC";
        Fields4["DEFAULT"] = "DEFAULT";
        Fields4["FULL"] = "FULL";
    })(Fields4 = Occ.Fields4 || (Occ.Fields4 = {}));
    /**
     * Defines values for Fields5.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields5 = <Fields5>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields5;
    (function (Fields5) {
        Fields5["BASIC"] = "BASIC";
        Fields5["DEFAULT"] = "DEFAULT";
        Fields5["FULL"] = "FULL";
    })(Fields5 = Occ.Fields5 || (Occ.Fields5 = {}));
    /**
     * Defines values for Fields6.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields6 = <Fields6>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields6;
    (function (Fields6) {
        Fields6["BASIC"] = "BASIC";
        Fields6["DEFAULT"] = "DEFAULT";
        Fields6["FULL"] = "FULL";
    })(Fields6 = Occ.Fields6 || (Occ.Fields6 = {}));
    /**
     * Defines values for PageType.
     * Possible values include: 'ContentPage', 'ProductPage', 'CategoryPage',
     * 'CatalogPage'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: PageType = <PageType>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let PageType;
    (function (PageType) {
        PageType["CONTENT_PAGE"] = "ContentPage";
        PageType["PRODUCT_PAGE"] = "ProductPage";
        PageType["CATEGORY_PAGE"] = "CategoryPage";
        PageType["CATALOG_PAGE"] = "CatalogPage";
    })(PageType = Occ.PageType || (Occ.PageType = {}));
    /**
     * Defines values for Fields7.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields7 = <Fields7>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields7;
    (function (Fields7) {
        Fields7["BASIC"] = "BASIC";
        Fields7["DEFAULT"] = "DEFAULT";
        Fields7["FULL"] = "FULL";
    })(Fields7 = Occ.Fields7 || (Occ.Fields7 = {}));
    /**
     * Defines values for Fields8.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields8 = <Fields8>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields8;
    (function (Fields8) {
        Fields8["BASIC"] = "BASIC";
        Fields8["DEFAULT"] = "DEFAULT";
        Fields8["FULL"] = "FULL";
    })(Fields8 = Occ.Fields8 || (Occ.Fields8 = {}));
    /**
     * Defines values for Fields9.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields9 = <Fields9>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields9;
    (function (Fields9) {
        Fields9["BASIC"] = "BASIC";
        Fields9["DEFAULT"] = "DEFAULT";
        Fields9["FULL"] = "FULL";
    })(Fields9 = Occ.Fields9 || (Occ.Fields9 = {}));
    /**
     * Defines values for Fields10.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields10 = <Fields10>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields10;
    (function (Fields10) {
        Fields10["BASIC"] = "BASIC";
        Fields10["DEFAULT"] = "DEFAULT";
        Fields10["FULL"] = "FULL";
    })(Fields10 = Occ.Fields10 || (Occ.Fields10 = {}));
    /**
     * Defines values for Fields11.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields11 = <Fields11>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields11;
    (function (Fields11) {
        Fields11["BASIC"] = "BASIC";
        Fields11["DEFAULT"] = "DEFAULT";
        Fields11["FULL"] = "FULL";
    })(Fields11 = Occ.Fields11 || (Occ.Fields11 = {}));
    /**
     * Defines values for Fields12.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields12 = <Fields12>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields12;
    (function (Fields12) {
        Fields12["BASIC"] = "BASIC";
        Fields12["DEFAULT"] = "DEFAULT";
        Fields12["FULL"] = "FULL";
    })(Fields12 = Occ.Fields12 || (Occ.Fields12 = {}));
    /**
     * Defines values for Fields13.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields13 = <Fields13>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields13;
    (function (Fields13) {
        Fields13["BASIC"] = "BASIC";
        Fields13["DEFAULT"] = "DEFAULT";
        Fields13["FULL"] = "FULL";
    })(Fields13 = Occ.Fields13 || (Occ.Fields13 = {}));
    /**
     * Defines values for Fields14.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields14 = <Fields14>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields14;
    (function (Fields14) {
        Fields14["BASIC"] = "BASIC";
        Fields14["DEFAULT"] = "DEFAULT";
        Fields14["FULL"] = "FULL";
    })(Fields14 = Occ.Fields14 || (Occ.Fields14 = {}));
    /**
     * Defines values for Fields15.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields15 = <Fields15>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields15;
    (function (Fields15) {
        Fields15["BASIC"] = "BASIC";
        Fields15["DEFAULT"] = "DEFAULT";
        Fields15["FULL"] = "FULL";
    })(Fields15 = Occ.Fields15 || (Occ.Fields15 = {}));
    /**
     * Defines values for Fields16.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields16 = <Fields16>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields16;
    (function (Fields16) {
        Fields16["BASIC"] = "BASIC";
        Fields16["DEFAULT"] = "DEFAULT";
        Fields16["FULL"] = "FULL";
    })(Fields16 = Occ.Fields16 || (Occ.Fields16 = {}));
    /**
     * Defines values for SortEnum.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: SortEnum = <SortEnum>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let SortEnum;
    (function (SortEnum) {
        SortEnum["BASIC"] = "BASIC";
        SortEnum["DEFAULT"] = "DEFAULT";
        SortEnum["FULL"] = "FULL";
    })(SortEnum = Occ.SortEnum || (Occ.SortEnum = {}));
    /**
     * Defines values for Fields17.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields17 = <Fields17>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields17;
    (function (Fields17) {
        Fields17["BASIC"] = "BASIC";
        Fields17["DEFAULT"] = "DEFAULT";
        Fields17["FULL"] = "FULL";
    })(Fields17 = Occ.Fields17 || (Occ.Fields17 = {}));
    /**
     * Defines values for Fields18.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields18 = <Fields18>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields18;
    (function (Fields18) {
        Fields18["BASIC"] = "BASIC";
        Fields18["DEFAULT"] = "DEFAULT";
        Fields18["FULL"] = "FULL";
    })(Fields18 = Occ.Fields18 || (Occ.Fields18 = {}));
    /**
     * Defines values for Fields19.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields19 = <Fields19>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields19;
    (function (Fields19) {
        Fields19["BASIC"] = "BASIC";
        Fields19["DEFAULT"] = "DEFAULT";
        Fields19["FULL"] = "FULL";
    })(Fields19 = Occ.Fields19 || (Occ.Fields19 = {}));
    /**
     * Defines values for Fields20.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields20 = <Fields20>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields20;
    (function (Fields20) {
        Fields20["BASIC"] = "BASIC";
        Fields20["DEFAULT"] = "DEFAULT";
        Fields20["FULL"] = "FULL";
    })(Fields20 = Occ.Fields20 || (Occ.Fields20 = {}));
    /**
     * Defines values for Fields21.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields21 = <Fields21>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields21;
    (function (Fields21) {
        Fields21["BASIC"] = "BASIC";
        Fields21["DEFAULT"] = "DEFAULT";
        Fields21["FULL"] = "FULL";
    })(Fields21 = Occ.Fields21 || (Occ.Fields21 = {}));
    /**
     * Defines values for Fields22.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields22 = <Fields22>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields22;
    (function (Fields22) {
        Fields22["BASIC"] = "BASIC";
        Fields22["DEFAULT"] = "DEFAULT";
        Fields22["FULL"] = "FULL";
    })(Fields22 = Occ.Fields22 || (Occ.Fields22 = {}));
    /**
     * Defines values for Fields23.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields23 = <Fields23>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields23;
    (function (Fields23) {
        Fields23["BASIC"] = "BASIC";
        Fields23["DEFAULT"] = "DEFAULT";
        Fields23["FULL"] = "FULL";
    })(Fields23 = Occ.Fields23 || (Occ.Fields23 = {}));
    /**
     * Defines values for Fields24.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields24 = <Fields24>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields24;
    (function (Fields24) {
        Fields24["BASIC"] = "BASIC";
        Fields24["DEFAULT"] = "DEFAULT";
        Fields24["FULL"] = "FULL";
    })(Fields24 = Occ.Fields24 || (Occ.Fields24 = {}));
    /**
     * Defines values for Fields25.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields25 = <Fields25>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields25;
    (function (Fields25) {
        Fields25["BASIC"] = "BASIC";
        Fields25["DEFAULT"] = "DEFAULT";
        Fields25["FULL"] = "FULL";
    })(Fields25 = Occ.Fields25 || (Occ.Fields25 = {}));
    /**
     * Defines values for Fields26.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields26 = <Fields26>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields26;
    (function (Fields26) {
        Fields26["BASIC"] = "BASIC";
        Fields26["DEFAULT"] = "DEFAULT";
        Fields26["FULL"] = "FULL";
    })(Fields26 = Occ.Fields26 || (Occ.Fields26 = {}));
    /**
     * Defines values for Fields27.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields27 = <Fields27>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields27;
    (function (Fields27) {
        Fields27["BASIC"] = "BASIC";
        Fields27["DEFAULT"] = "DEFAULT";
        Fields27["FULL"] = "FULL";
    })(Fields27 = Occ.Fields27 || (Occ.Fields27 = {}));
    /**
     * Defines values for Fields28.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields28 = <Fields28>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields28;
    (function (Fields28) {
        Fields28["BASIC"] = "BASIC";
        Fields28["DEFAULT"] = "DEFAULT";
        Fields28["FULL"] = "FULL";
    })(Fields28 = Occ.Fields28 || (Occ.Fields28 = {}));
    /**
     * Defines values for Fields29.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields29 = <Fields29>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields29;
    (function (Fields29) {
        Fields29["BASIC"] = "BASIC";
        Fields29["DEFAULT"] = "DEFAULT";
        Fields29["FULL"] = "FULL";
    })(Fields29 = Occ.Fields29 || (Occ.Fields29 = {}));
    /**
     * Defines values for Fields30.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields30 = <Fields30>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields30;
    (function (Fields30) {
        Fields30["BASIC"] = "BASIC";
        Fields30["DEFAULT"] = "DEFAULT";
        Fields30["FULL"] = "FULL";
    })(Fields30 = Occ.Fields30 || (Occ.Fields30 = {}));
    /**
     * Defines values for Fields31.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields31 = <Fields31>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields31;
    (function (Fields31) {
        Fields31["BASIC"] = "BASIC";
        Fields31["DEFAULT"] = "DEFAULT";
        Fields31["FULL"] = "FULL";
    })(Fields31 = Occ.Fields31 || (Occ.Fields31 = {}));
    /**
     * Defines values for Fields32.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields32 = <Fields32>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields32;
    (function (Fields32) {
        Fields32["BASIC"] = "BASIC";
        Fields32["DEFAULT"] = "DEFAULT";
        Fields32["FULL"] = "FULL";
    })(Fields32 = Occ.Fields32 || (Occ.Fields32 = {}));
    /**
     * Defines values for Fields33.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields33 = <Fields33>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields33;
    (function (Fields33) {
        Fields33["BASIC"] = "BASIC";
        Fields33["DEFAULT"] = "DEFAULT";
        Fields33["FULL"] = "FULL";
    })(Fields33 = Occ.Fields33 || (Occ.Fields33 = {}));
    /**
     * Defines values for Fields34.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields34 = <Fields34>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields34;
    (function (Fields34) {
        Fields34["BASIC"] = "BASIC";
        Fields34["DEFAULT"] = "DEFAULT";
        Fields34["FULL"] = "FULL";
    })(Fields34 = Occ.Fields34 || (Occ.Fields34 = {}));
    /**
     * Defines values for Fields35.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields35 = <Fields35>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields35;
    (function (Fields35) {
        Fields35["BASIC"] = "BASIC";
        Fields35["DEFAULT"] = "DEFAULT";
        Fields35["FULL"] = "FULL";
    })(Fields35 = Occ.Fields35 || (Occ.Fields35 = {}));
    /**
     * Defines values for Fields36.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields36 = <Fields36>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields36;
    (function (Fields36) {
        Fields36["BASIC"] = "BASIC";
        Fields36["DEFAULT"] = "DEFAULT";
        Fields36["FULL"] = "FULL";
    })(Fields36 = Occ.Fields36 || (Occ.Fields36 = {}));
    /**
     * Defines values for Fields37.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields37 = <Fields37>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields37;
    (function (Fields37) {
        Fields37["BASIC"] = "BASIC";
        Fields37["DEFAULT"] = "DEFAULT";
        Fields37["FULL"] = "FULL";
    })(Fields37 = Occ.Fields37 || (Occ.Fields37 = {}));
    /**
     * Defines values for Fields38.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields38 = <Fields38>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields38;
    (function (Fields38) {
        Fields38["BASIC"] = "BASIC";
        Fields38["DEFAULT"] = "DEFAULT";
        Fields38["FULL"] = "FULL";
    })(Fields38 = Occ.Fields38 || (Occ.Fields38 = {}));
    /**
     * Defines values for Fields39.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields39 = <Fields39>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields39;
    (function (Fields39) {
        Fields39["BASIC"] = "BASIC";
        Fields39["DEFAULT"] = "DEFAULT";
        Fields39["FULL"] = "FULL";
    })(Fields39 = Occ.Fields39 || (Occ.Fields39 = {}));
    /**
     * Defines values for Fields40.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields40 = <Fields40>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields40;
    (function (Fields40) {
        Fields40["BASIC"] = "BASIC";
        Fields40["DEFAULT"] = "DEFAULT";
        Fields40["FULL"] = "FULL";
    })(Fields40 = Occ.Fields40 || (Occ.Fields40 = {}));
    /**
     * Defines values for Fields41.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields41 = <Fields41>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields41;
    (function (Fields41) {
        Fields41["BASIC"] = "BASIC";
        Fields41["DEFAULT"] = "DEFAULT";
        Fields41["FULL"] = "FULL";
    })(Fields41 = Occ.Fields41 || (Occ.Fields41 = {}));
    /**
     * Defines values for Fields42.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields42 = <Fields42>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields42;
    (function (Fields42) {
        Fields42["BASIC"] = "BASIC";
        Fields42["DEFAULT"] = "DEFAULT";
        Fields42["FULL"] = "FULL";
    })(Fields42 = Occ.Fields42 || (Occ.Fields42 = {}));
    /**
     * Defines values for Fields43.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields43 = <Fields43>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields43;
    (function (Fields43) {
        Fields43["BASIC"] = "BASIC";
        Fields43["DEFAULT"] = "DEFAULT";
        Fields43["FULL"] = "FULL";
    })(Fields43 = Occ.Fields43 || (Occ.Fields43 = {}));
    /**
     * Defines values for Fields44.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields44 = <Fields44>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields44;
    (function (Fields44) {
        Fields44["BASIC"] = "BASIC";
        Fields44["DEFAULT"] = "DEFAULT";
        Fields44["FULL"] = "FULL";
    })(Fields44 = Occ.Fields44 || (Occ.Fields44 = {}));
    /**
     * Defines values for Fields45.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields45 = <Fields45>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields45;
    (function (Fields45) {
        Fields45["BASIC"] = "BASIC";
        Fields45["DEFAULT"] = "DEFAULT";
        Fields45["FULL"] = "FULL";
    })(Fields45 = Occ.Fields45 || (Occ.Fields45 = {}));
    /**
     * Defines values for Fields46.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields46 = <Fields46>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields46;
    (function (Fields46) {
        Fields46["BASIC"] = "BASIC";
        Fields46["DEFAULT"] = "DEFAULT";
        Fields46["FULL"] = "FULL";
    })(Fields46 = Occ.Fields46 || (Occ.Fields46 = {}));
    /**
     * Defines values for Fields47.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields47 = <Fields47>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields47;
    (function (Fields47) {
        Fields47["BASIC"] = "BASIC";
        Fields47["DEFAULT"] = "DEFAULT";
        Fields47["FULL"] = "FULL";
    })(Fields47 = Occ.Fields47 || (Occ.Fields47 = {}));
    /**
     * Defines values for Fields48.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields48 = <Fields48>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields48;
    (function (Fields48) {
        Fields48["BASIC"] = "BASIC";
        Fields48["DEFAULT"] = "DEFAULT";
        Fields48["FULL"] = "FULL";
    })(Fields48 = Occ.Fields48 || (Occ.Fields48 = {}));
    /**
     * Defines values for Fields49.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields49 = <Fields49>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields49;
    (function (Fields49) {
        Fields49["BASIC"] = "BASIC";
        Fields49["DEFAULT"] = "DEFAULT";
        Fields49["FULL"] = "FULL";
    })(Fields49 = Occ.Fields49 || (Occ.Fields49 = {}));
    /**
     * Defines values for Fields50.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields50 = <Fields50>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields50;
    (function (Fields50) {
        Fields50["BASIC"] = "BASIC";
        Fields50["DEFAULT"] = "DEFAULT";
        Fields50["FULL"] = "FULL";
    })(Fields50 = Occ.Fields50 || (Occ.Fields50 = {}));
    /**
     * Defines values for Fields51.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields51 = <Fields51>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields51;
    (function (Fields51) {
        Fields51["BASIC"] = "BASIC";
        Fields51["DEFAULT"] = "DEFAULT";
        Fields51["FULL"] = "FULL";
    })(Fields51 = Occ.Fields51 || (Occ.Fields51 = {}));
    /**
     * Defines values for Fields52.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields52 = <Fields52>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields52;
    (function (Fields52) {
        Fields52["BASIC"] = "BASIC";
        Fields52["DEFAULT"] = "DEFAULT";
        Fields52["FULL"] = "FULL";
    })(Fields52 = Occ.Fields52 || (Occ.Fields52 = {}));
    /**
     * Defines values for Fields53.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields53 = <Fields53>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields53;
    (function (Fields53) {
        Fields53["BASIC"] = "BASIC";
        Fields53["DEFAULT"] = "DEFAULT";
        Fields53["FULL"] = "FULL";
    })(Fields53 = Occ.Fields53 || (Occ.Fields53 = {}));
    /**
     * Defines values for Fields54.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields54 = <Fields54>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields54;
    (function (Fields54) {
        Fields54["BASIC"] = "BASIC";
        Fields54["DEFAULT"] = "DEFAULT";
        Fields54["FULL"] = "FULL";
    })(Fields54 = Occ.Fields54 || (Occ.Fields54 = {}));
    /**
     * Defines values for Fields55.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields55 = <Fields55>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields55;
    (function (Fields55) {
        Fields55["BASIC"] = "BASIC";
        Fields55["DEFAULT"] = "DEFAULT";
        Fields55["FULL"] = "FULL";
    })(Fields55 = Occ.Fields55 || (Occ.Fields55 = {}));
    /**
     * Defines values for Fields56.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields56 = <Fields56>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields56;
    (function (Fields56) {
        Fields56["BASIC"] = "BASIC";
        Fields56["DEFAULT"] = "DEFAULT";
        Fields56["FULL"] = "FULL";
    })(Fields56 = Occ.Fields56 || (Occ.Fields56 = {}));
    /**
     * Defines values for Fields57.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields57 = <Fields57>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields57;
    (function (Fields57) {
        Fields57["BASIC"] = "BASIC";
        Fields57["DEFAULT"] = "DEFAULT";
        Fields57["FULL"] = "FULL";
    })(Fields57 = Occ.Fields57 || (Occ.Fields57 = {}));
    /**
     * Defines values for Fields58.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields58 = <Fields58>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields58;
    (function (Fields58) {
        Fields58["BASIC"] = "BASIC";
        Fields58["DEFAULT"] = "DEFAULT";
        Fields58["FULL"] = "FULL";
    })(Fields58 = Occ.Fields58 || (Occ.Fields58 = {}));
    /**
     * Defines values for Fields59.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields59 = <Fields59>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields59;
    (function (Fields59) {
        Fields59["BASIC"] = "BASIC";
        Fields59["DEFAULT"] = "DEFAULT";
        Fields59["FULL"] = "FULL";
    })(Fields59 = Occ.Fields59 || (Occ.Fields59 = {}));
    /**
     * Defines values for Fields60.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields60 = <Fields60>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields60;
    (function (Fields60) {
        Fields60["BASIC"] = "BASIC";
        Fields60["DEFAULT"] = "DEFAULT";
        Fields60["FULL"] = "FULL";
    })(Fields60 = Occ.Fields60 || (Occ.Fields60 = {}));
    /**
     * Defines values for Fields61.
     * Possible values include: 'BASIC', 'DEFAULT', 'FULL'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Fields61 = <Fields61>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Fields61;
    (function (Fields61) {
        Fields61["BASIC"] = "BASIC";
        Fields61["DEFAULT"] = "DEFAULT";
        Fields61["FULL"] = "FULL";
    })(Fields61 = Occ.Fields61 || (Occ.Fields61 = {}));
    /**
     * Defines values for Type.
     * Possible values include: 'all', 'product', 'order'
     * There could be more values for this enum apart from the ones defined here.If
     * you want to set a value that is not from the known values then you can do
     * the following:
     * let param: Type = <Type>"someUnknownValueThatWillStillBeValid";
     * @readonly
     * @enum {string}
     */
    let Type;
    (function (Type) {
        Type["All"] = "all";
        Type["Product"] = "product";
        Type["Order"] = "order";
    })(Type = Occ.Type || (Occ.Type = {}));
    let CONSENT_STATUS;
    (function (CONSENT_STATUS) {
        CONSENT_STATUS["ANONYMOUS_CONSENT_GIVEN"] = "GIVEN";
        CONSENT_STATUS["ANONYMOUS_CONSENT_WITHDRAWN"] = "WITHDRAWN";
    })(CONSENT_STATUS = Occ.CONSENT_STATUS || (Occ.CONSENT_STATUS = {}));
    let NotificationType;
    (function (NotificationType) {
        NotificationType["BACK_IN_STOCK"] = "BACK_IN_STOCK";
    })(NotificationType = Occ.NotificationType || (Occ.NotificationType = {}));
    let Period;
    (function (Period) {
        Period["DAY"] = "DAY";
        Period["WEEK"] = "WEEK";
        Period["MONTH"] = "MONTH";
        Period["QUARTER"] = "QUARTER";
        Period["YEAR"] = "YEAR";
    })(Period = Occ.Period || (Occ.Period = {}));
    let DaysOfWeek;
    (function (DaysOfWeek) {
        DaysOfWeek["MONDAY"] = "MONDAY";
        DaysOfWeek["TUESDAY"] = "TUESDAY";
        DaysOfWeek["WEDNESDAY"] = "WEDNESDAY";
        DaysOfWeek["THURSDAY"] = "THURSDAY";
        DaysOfWeek["FRIDAY"] = "FRIDAY";
        DaysOfWeek["SATURDAY"] = "SATURDAY";
        DaysOfWeek["SUNDAY"] = "SUNDAY";
    })(DaysOfWeek = Occ.DaysOfWeek || (Occ.DaysOfWeek = {}));
    let OrderApprovalDecisionValue;
    (function (OrderApprovalDecisionValue) {
        OrderApprovalDecisionValue["APPROVE"] = "APPROVE";
        OrderApprovalDecisionValue["REJECT"] = "REJECT";
    })(OrderApprovalDecisionValue = Occ.OrderApprovalDecisionValue || (Occ.OrderApprovalDecisionValue = {}));
})(Occ || (Occ = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFXLEdBQUcsQ0FteEluQjtBQW54SUQsV0FBaUIsR0FBRztJQXM2RmxCOzs7Ozs7Ozs7T0FTRztJQUNILElBQVksU0FHWDtJQUhELFdBQVksU0FBUztRQUNuQix3QkFBVyxDQUFBO1FBQ1gsMEJBQWEsQ0FBQTtJQUNmLENBQUMsRUFIVyxTQUFTLEdBQVQsYUFBUyxLQUFULGFBQVMsUUFHcEI7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxJQUFZLFNBR1g7SUFIRCxXQUFZLFNBQVM7UUFDbkIsZ0NBQW1CLENBQUE7UUFDbkIsZ0NBQW1CLENBQUE7SUFDckIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxhQUFTLEtBQVQsYUFBUyxRQUdwQjtJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQVksTUFJWDtJQUpELFdBQVksTUFBTTtRQUNoQix5QkFBZSxDQUFBO1FBQ2YsNkJBQW1CLENBQUE7UUFDbkIsdUJBQWEsQ0FBQTtJQUNmLENBQUMsRUFKVyxNQUFNLEdBQU4sVUFBTSxLQUFOLFVBQU0sUUFJakI7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxJQUFZLE9BSVg7SUFKRCxXQUFZLE9BQU87UUFDakIsMEJBQWUsQ0FBQTtRQUNmLDhCQUFtQixDQUFBO1FBQ25CLHdCQUFhLENBQUE7SUFDZixDQUFDLEVBSlcsT0FBTyxHQUFQLFdBQU8sS0FBUCxXQUFPLFFBSWxCO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBWSxPQUlYO0lBSkQsV0FBWSxPQUFPO1FBQ2pCLDBCQUFlLENBQUE7UUFDZiw4QkFBbUIsQ0FBQTtRQUNuQix3QkFBYSxDQUFBO0lBQ2YsQ0FBQyxFQUpXLE9BQU8sR0FBUCxXQUFPLEtBQVAsV0FBTyxRQUlsQjtJQUVE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QUksUUFJZjtJQVFELElBQVksY0FHWDtJQUhELFdBQVksY0FBYztRQUN4QixtREFBaUMsQ0FBQTtRQUNqQywyREFBeUMsQ0FBQTtJQUMzQyxDQUFDLEVBSFcsY0FBYyxHQUFkLGtCQUFjLEtBQWQsa0JBQWMsUUFHekI7SUErREQsSUFBWSxnQkFFWDtJQUZELFdBQVksZ0JBQWdCO1FBQzFCLG1EQUErQixDQUFBO0lBQ2pDLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsb0JBQWdCLEtBQWhCLG9CQUFnQixRQUUzQjtJQWdIRCxJQUFZLE1BTVg7SUFORCxXQUFZLE1BQU07UUFDaEIscUJBQVcsQ0FBQTtRQUNYLHVCQUFhLENBQUE7UUFDYix5QkFBZSxDQUFBO1FBQ2YsNkJBQW1CLENBQUE7UUFDbkIsdUJBQWEsQ0FBQTtJQUNmLENBQUMsRUFOVyxNQUFNLEdBQU4sVUFBTSxLQUFOLFVBQU0sUUFNakI7SUFxRkQsSUFBWSxVQVFYO0lBUkQsV0FBWSxVQUFVO1FBQ3BCLCtCQUFpQixDQUFBO1FBQ2pCLGlDQUFtQixDQUFBO1FBQ25CLHFDQUF1QixDQUFBO1FBQ3ZCLG1DQUFxQixDQUFBO1FBQ3JCLCtCQUFpQixDQUFBO1FBQ2pCLG1DQUFxQixDQUFBO1FBQ3JCLCtCQUFpQixDQUFBO0lBQ25CLENBQUMsRUFSVyxVQUFVLEdBQVYsY0FBVSxLQUFWLGNBQVUsUUFRckI7SUFFRCxJQUFZLDBCQUdYO0lBSEQsV0FBWSwwQkFBMEI7UUFDcEMsaURBQW1CLENBQUE7UUFDbkIsK0NBQWlCLENBQUE7SUFDbkIsQ0FBQyxFQUhXLDBCQUEwQixHQUExQiw4QkFBMEIsS0FBMUIsOEJBQTBCLFFBR3JDO0FBMkJILENBQUMsRUFueElnQixHQUFHLEtBQUgsR0FBRyxRQW14SW5CIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IG5hbWVzcGFjZSBPY2Mge1xuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb3VudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb3VudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmVnaW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZWdpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvdW50cnlJc29dXG4gICAgICovXG4gICAgY291bnRyeUlzbz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZVNob3J0XVxuICAgICAqL1xuICAgIGlzb2NvZGVTaG9ydD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZWdpb25MaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZWdpb25MaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZWdpb25bXX0gW3JlZ2lvbnNdXG4gICAgICovXG4gICAgcmVnaW9ucz86IFJlZ2lvbltdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzTGlzdCB7XG4gICAgYWRkcmVzc2VzPzogQWRkcmVzc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQWRkcmVzcy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzcyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29tcGFueU5hbWVdXG4gICAgICovXG4gICAgY29tcGFueU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q291bnRyeX0gW2NvdW50cnldXG4gICAgICovXG4gICAgY291bnRyeT86IENvdW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlZmF1bHRBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlZmF1bHRBZGRyZXNzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtlbWFpbF1cbiAgICAgKi9cbiAgICBlbWFpbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmaXJzdE5hbWVdXG4gICAgICovXG4gICAgZmlyc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZEFkZHJlc3NdXG4gICAgICovXG4gICAgZm9ybWF0dGVkQWRkcmVzcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsYXN0TmFtZV1cbiAgICAgKi9cbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsaW5lMV1cbiAgICAgKi9cbiAgICBsaW5lMT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsaW5lMl1cbiAgICAgKi9cbiAgICBsaW5lMj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwaG9uZV1cbiAgICAgKi9cbiAgICBwaG9uZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0b3duXVxuICAgICAqL1xuICAgIGNlbGxwaG9uZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwb3N0YWxDb2RlXVxuICAgICAqL1xuICAgIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmVnaW9ufSBbcmVnaW9uXVxuICAgICAqL1xuICAgIHJlZ2lvbj86IFJlZ2lvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0b3duXVxuICAgICAqL1xuICAgIGRpc3RyaWN0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzaGlwcGluZ0FkZHJlc3NdXG4gICAgICovXG4gICAgc2hpcHBpbmdBZGRyZXNzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZUNvZGVdXG4gICAgICovXG4gICAgdGl0bGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Rvd25dXG4gICAgICovXG4gICAgdG93bj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdmlzaWJsZUluQWRkcmVzc0Jvb2tdXG4gICAgICovXG4gICAgdmlzaWJsZUluQWRkcmVzc0Jvb2s/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQWRkcmVzc0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzW119IFthZGRyZXNzZXNdXG4gICAgICovXG4gICAgYWRkcmVzc2VzPzogQWRkcmVzc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRXJyb3JNb2RlbC5cbiAgICogRXJyb3IgbWVzc2FnZVxuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBFcnJvck1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFttZXNzYWdlXSBEZXNjcmlwdGl2ZSwgaHVtYW4gcmVhZGFibGUgZXJyb3IgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JlYXNvbl0gQWRkaXRpb25hbCBjbGFzc2lmaWNhdGlvbiBzcGVjaWZpYyBmb3IgZWFjaFxuICAgICAqIGVycm9yIHR5cGUgZS5nLiAnbm9TdG9jaycuXG4gICAgICovXG4gICAgcmVhc29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1YmplY3RdIElkZW50aWZpZXIgb2YgdGhlIHJlbGF0ZWQgb2JqZWN0IGUuZy4gJzEnLlxuICAgICAqL1xuICAgIHN1YmplY3Q/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ViamVjdFR5cGVdIFR5cGUgb2YgdGhlIG9iamVjdCByZWxhdGVkIHRvIHRoZSBlcnJvclxuICAgICAqIGUuZy4gJ2VudHJ5Jy5cbiAgICAgKi9cbiAgICBzdWJqZWN0VHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlXSBUeXBlIG9mIHRoZSBlcnJvciBlLmcuICdMb3dTdG9ja0Vycm9yJy5cbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRXJyb3JMaXN0LlxuICAgKiBMaXN0IG9mIGVycm9yc1xuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBFcnJvckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yTW9kZWxbXX0gW2Vycm9yc11cbiAgICAgKi9cbiAgICBlcnJvcnM/OiBFcnJvck1vZGVsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBBZGRyZXNzVmFsaWRhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc1ZhbGlkYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2RlY2lzaW9uXVxuICAgICAqL1xuICAgIGRlY2lzaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yTGlzdH0gW2Vycm9yc11cbiAgICAgKi9cbiAgICBlcnJvcnM/OiBFcnJvckxpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc1tdfSBbc3VnZ2VzdGVkQWRkcmVzc2VzXVxuICAgICAqL1xuICAgIHN1Z2dlc3RlZEFkZHJlc3Nlcz86IEFkZHJlc3NbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaWNlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcmljZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3VycmVuY3lJc29dXG4gICAgICovXG4gICAgY3VycmVuY3lJc28/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkVmFsdWVdXG4gICAgICovXG4gICAgZm9ybWF0dGVkVmFsdWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWF4UXVhbnRpdHldXG4gICAgICovXG4gICAgbWF4UXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWluUXVhbnRpdHldXG4gICAgICovXG4gICAgbWluUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2VUeXBlfSBbcHJpY2VUeXBlXSBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JVWScsICdGUk9NJ1xuICAgICAqL1xuICAgIHByaWNlVHlwZT86IFByaWNlVHlwZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9jayB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc3RvY2tMZXZlbF1cbiAgICAgKi9cbiAgICBzdG9ja0xldmVsPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b2NrTGV2ZWxTdGF0dXNdXG4gICAgICovXG4gICAgc3RvY2tMZXZlbFN0YXR1cz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEltYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBJbWFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYWx0VGV4dF1cbiAgICAgKi9cbiAgICBhbHRUZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdF1cbiAgICAgKi9cbiAgICBmb3JtYXQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZ2FsbGVyeUluZGV4XVxuICAgICAqL1xuICAgIGdhbGxlcnlJbmRleD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVR5cGV9IFtpbWFnZVR5cGVdIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnUFJJTUFSWScsXG4gICAgICogJ0dBTExFUlknXG4gICAgICovXG4gICAgaW1hZ2VUeXBlPzogSW1hZ2VUeXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uUXVhbGlmaWVyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW2ltYWdlXVxuICAgICAqL1xuICAgIGltYWdlPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3F1YWxpZmllcl1cbiAgICAgKi9cbiAgICBxdWFsaWZpZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50T3B0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcmljZURhdGFdXG4gICAgICovXG4gICAgcHJpY2VEYXRhPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja11cbiAgICAgKi9cbiAgICBzdG9jaz86IFN0b2NrO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvblF1YWxpZmllcltdfSBbdmFyaWFudE9wdGlvblF1YWxpZmllcnNdXG4gICAgICovXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM/OiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBCYXNlT3B0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBCYXNlT3B0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9uW119IFtvcHRpb25zXVxuICAgICAqL1xuICAgIG9wdGlvbnM/OiBWYXJpYW50T3B0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogVmFyaWFudE9wdGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YXJpYW50VHlwZV1cbiAgICAgKi9cbiAgICB2YXJpYW50VHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNlYXJjaFF1ZXJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTZWFyY2hRdWVyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTZWFyY2hTdGF0ZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoU3RhdGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFF1ZXJ5fSBbcXVlcnldXG4gICAgICovXG4gICAgcXVlcnk/OiBTZWFyY2hRdWVyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQnJlYWRjcnVtYi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXRDb2RlXVxuICAgICAqL1xuICAgIGZhY2V0Q29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmYWNldE5hbWVdXG4gICAgICovXG4gICAgZmFjZXROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0VmFsdWVDb2RlXVxuICAgICAqL1xuICAgIGZhY2V0VmFsdWVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0VmFsdWVOYW1lXVxuICAgICAqL1xuICAgIGZhY2V0VmFsdWVOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFN0YXRlfSBbcmVtb3ZlUXVlcnldXG4gICAgICovXG4gICAgcmVtb3ZlUXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW3RydW5jYXRlUXVlcnldXG4gICAgICovXG4gICAgdHJ1bmNhdGVRdWVyeT86IFNlYXJjaFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29tcG9uZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFttb2RpZmllZFRpbWVdXG4gICAgICovXG4gICAgbW9kaWZpZWRUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55fSBbb3RoZXJQcm9wZXJ0aWVzXVxuICAgICAqL1xuICAgIG90aGVyUHJvcGVydGllcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlQ29kZV1cbiAgICAgKi9cbiAgICB0eXBlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29tcG9uZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29tcG9uZW50W119IFtjb21wb25lbnRdXG4gICAgICovXG4gICAgY29tcG9uZW50PzogQ29tcG9uZW50W10gfCBhbnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnRlbnRTbG90LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2xvdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29tcG9uZW50TGlzdH0gW2NvbXBvbmVudHNdXG4gICAgICovXG4gICAgY29tcG9uZW50cz86IENvbXBvbmVudExpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Bvc2l0aW9uXVxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Nsb3RJZF1cbiAgICAgKi9cbiAgICBzbG90SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3Nsb3RTaGFyZWRdXG4gICAgICovXG4gICAgc2xvdFNoYXJlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2xvdFN0YXR1c11cbiAgICAgKi9cbiAgICBzbG90U3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29udGVudFNsb3RMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2xvdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnRlbnRTbG90W119IFtjb250ZW50U2xvdF1cbiAgICAgKi9cbiAgICBjb250ZW50U2xvdD86IENvbnRlbnRTbG90W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDTVNQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDTVNQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb250ZW50U2xvdExpc3R9IFtjb250ZW50U2xvdHNdXG4gICAgICovXG4gICAgY29udGVudFNsb3RzPzogQ29udGVudFNsb3RMaXN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtkZWZhdWx0UGFnZV1cbiAgICAgKi9cbiAgICBkZWZhdWx0UGFnZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RlbXBsYXRlXVxuICAgICAqL1xuICAgIHRlbXBsYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVDb2RlXVxuICAgICAqL1xuICAgIHR5cGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJkVHlwZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FyZFR5cGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJkVHlwZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcmRUeXBlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2FyZFR5cGVbXX0gW2NhcmRUeXBlc11cbiAgICAgKi9cbiAgICBjYXJkVHlwZXM/OiBDYXJkVHlwZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudFR5cGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnRUeXBlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGlzcGxheU5hbWVdXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYXltZW50VHlwZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnRUeXBlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudFR5cGVbXX0gW3BheW1lbnRUeXBlc11cbiAgICAgKi9cbiAgICBwYXltZW50VHlwZXM/OiBQYXltZW50VHlwZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2FkanVzdGVkVW5pdFByaWNlXVxuICAgICAqL1xuICAgIGFkanVzdGVkVW5pdFByaWNlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtvcmRlckVudHJ5TnVtYmVyXVxuICAgICAqL1xuICAgIG9yZGVyRW50cnlOdW1iZXI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25SZXN0cmljdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdHJpY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Jlc3RyaWN0aW9uVHlwZV1cbiAgICAgKi9cbiAgICByZXN0cmljdGlvblR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ1tdfSBbY291bGRGaXJlTWVzc2FnZXNdXG4gICAgICovXG4gICAgY291bGRGaXJlTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZW5hYmxlZF1cbiAgICAgKi9cbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZW5kRGF0ZV1cbiAgICAgKi9cbiAgICBlbmREYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX0gW2ZpcmVkTWVzc2FnZXNdXG4gICAgICovXG4gICAgZmlyZWRNZXNzYWdlcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ByaW9yaXR5XVxuICAgICAqL1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbcHJvZHVjdEJhbm5lcl1cbiAgICAgKi9cbiAgICBwcm9kdWN0QmFubmVyPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcHJvbW90aW9uR3JvdXBdXG4gICAgICovXG4gICAgcHJvbW90aW9uR3JvdXA/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcHJvbW90aW9uVHlwZV1cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25UeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3RyaWN0aW9uW119IFtyZXN0cmljdGlvbnNdXG4gICAgICovXG4gICAgcmVzdHJpY3Rpb25zPzogUHJvbW90aW9uUmVzdHJpY3Rpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbc3RhcnREYXRlXVxuICAgICAqL1xuICAgIHN0YXJ0RGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVdXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25SZXN1bHQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvblJlc3VsdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkW119IFtjb25zdW1lZEVudHJpZXNdXG4gICAgICovXG4gICAgY29uc3VtZWRFbnRyaWVzPzogUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9ufSBbcHJvbW90aW9uXVxuICAgICAqL1xuICAgIHByb21vdGlvbj86IFByb21vdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEN1cnJlbmN5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FjdGl2ZV1cbiAgICAgKi9cbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVdXG4gICAgICovXG4gICAgaXNvY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ltYm9sXVxuICAgICAqL1xuICAgIHN5bWJvbD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZvdWNoZXIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZvdWNoZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbYXBwbGllZFZhbHVlXVxuICAgICAqL1xuICAgIGFwcGxpZWRWYWx1ZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDdXJyZW5jeX0gW2N1cnJlbmN5XVxuICAgICAqL1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2ZyZWVTaGlwcGluZ11cbiAgICAgKi9cbiAgICBmcmVlU2hpcHBpbmc/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZUZvcm1hdHRlZF1cbiAgICAgKi9cbiAgICB2YWx1ZUZvcm1hdHRlZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZVN0cmluZ11cbiAgICAgKi9cbiAgICB2YWx1ZVN0cmluZz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2b3VjaGVyQ29kZV1cbiAgICAgKi9cbiAgICB2b3VjaGVyQ29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIERlbGl2ZXJ5TW9kZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlNb2RlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtkZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgR2VvUG9pbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEdlb1BvaW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtsYXRpdHVkZV1cbiAgICAgKi9cbiAgICBsYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtsb25naXR1ZGVdXG4gICAgICovXG4gICAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGltZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGltZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkSG91cl1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWRIb3VyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2hvdXJdXG4gICAgICovXG4gICAgaG91cj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFttaW51dGVdXG4gICAgICovXG4gICAgbWludXRlPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3BlY2lhbE9wZW5pbmdEYXkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNwZWNpYWxPcGVuaW5nRGF5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2xvc2VkXVxuICAgICAqL1xuICAgIGNsb3NlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW2Nsb3NpbmdUaW1lXVxuICAgICAqL1xuICAgIGNsb3NpbmdUaW1lPzogVGltZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb21tZW50XVxuICAgICAqL1xuICAgIGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RhdGVdXG4gICAgICovXG4gICAgZGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkRGF0ZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbb3BlbmluZ1RpbWVdXG4gICAgICovXG4gICAgb3BlbmluZ1RpbWU/OiBUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgV2Vla2RheU9wZW5pbmdEYXkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFdlZWtkYXlPcGVuaW5nRGF5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2xvc2VkXVxuICAgICAqL1xuICAgIGNsb3NlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW2Nsb3NpbmdUaW1lXVxuICAgICAqL1xuICAgIGNsb3NpbmdUaW1lPzogVGltZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbb3BlbmluZ1RpbWVdXG4gICAgICovXG4gICAgb3BlbmluZ1RpbWU/OiBUaW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3dlZWtEYXldXG4gICAgICovXG4gICAgd2Vla0RheT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9wZW5pbmdTY2hlZHVsZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlbmluZ1NjaGVkdWxlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NwZWNpYWxPcGVuaW5nRGF5W119IFtzcGVjaWFsRGF5T3BlbmluZ0xpc3RdXG4gICAgICovXG4gICAgc3BlY2lhbERheU9wZW5pbmdMaXN0PzogU3BlY2lhbE9wZW5pbmdEYXlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtXZWVrZGF5T3BlbmluZ0RheVtdfSBbd2Vla0RheU9wZW5pbmdMaXN0XVxuICAgICAqL1xuICAgIHdlZWtEYXlPcGVuaW5nTGlzdD86IFdlZWtkYXlPcGVuaW5nRGF5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQb2ludE9mU2VydmljZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUG9pbnRPZlNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFthZGRyZXNzXVxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rpc3BsYXlOYW1lXVxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2Rpc3RhbmNlS21dXG4gICAgICovXG4gICAgZGlzdGFuY2VLbT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHt7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9fSBbZmVhdHVyZXNdXG4gICAgICovXG4gICAgZmVhdHVyZXM/OiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERpc3RhbmNlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERpc3RhbmNlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0dlb1BvaW50fSBbZ2VvUG9pbnRdXG4gICAgICovXG4gICAgZ2VvUG9pbnQ/OiBHZW9Qb2ludDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW21hcEljb25dXG4gICAgICovXG4gICAgbWFwSWNvbj86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcGVuaW5nU2NoZWR1bGV9IFtvcGVuaW5nSG91cnNdXG4gICAgICovXG4gICAgb3BlbmluZ0hvdXJzPzogT3BlbmluZ1NjaGVkdWxlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlQ29udGVudF1cbiAgICAgKi9cbiAgICBzdG9yZUNvbnRlbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2VbXX0gW3N0b3JlSW1hZ2VzXVxuICAgICAqL1xuICAgIHN0b3JlSW1hZ2VzPzogSW1hZ2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0ZWdvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbaW1hZ2VdXG4gICAgICovXG4gICAgaW1hZ2U/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmVhdHVyZVVuaXQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVVbml0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ltYm9sXVxuICAgICAqL1xuICAgIHN5bWJvbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1bml0VHlwZV1cbiAgICAgKi9cbiAgICB1bml0VHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZlYXR1cmVWYWx1ZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVZhbHVlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZlYXR1cmUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZlYXR1cmUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY29tcGFyYWJsZV1cbiAgICAgKi9cbiAgICBjb21wYXJhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGZWF0dXJlVW5pdH0gW2ZlYXR1cmVVbml0XVxuICAgICAqL1xuICAgIGZlYXR1cmVVbml0PzogRmVhdHVyZVVuaXQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmVhdHVyZVZhbHVlW119IFtmZWF0dXJlVmFsdWVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVWYWx1ZXM/OiBGZWF0dXJlVmFsdWVbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3JhbmdlXVxuICAgICAqL1xuICAgIHJhbmdlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlXVxuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDbGFzc2lmaWNhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZmljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGZWF0dXJlW119IFtmZWF0dXJlc11cbiAgICAgKi9cbiAgICBmZWF0dXJlcz86IEZlYXR1cmVbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGdXR1cmVTdG9jay5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRnV0dXJlU3RvY2sge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkYXRlXVxuICAgICAqL1xuICAgIGRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERhdGVdXG4gICAgICovXG4gICAgZm9ybWF0dGVkRGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrXVxuICAgICAqL1xuICAgIHN0b2NrPzogU3RvY2s7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcmljZVJhbmdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcmljZVJhbmdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW21heFByaWNlXVxuICAgICAqL1xuICAgIG1heFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFttaW5QcmljZV1cbiAgICAgKi9cbiAgICBtaW5QcmljZT86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdFJlZmVyZW5jZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3ByZXNlbGVjdGVkXVxuICAgICAqL1xuICAgIHByZXNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtyZWZlcmVuY2VUeXBlXVxuICAgICAqL1xuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdH0gW3RhcmdldF1cbiAgICAgKi9cbiAgICB0YXJnZXQ/OiBQcm9kdWN0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTGFuZ3VhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbYWN0aXZlXVxuICAgICAqL1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYXRpdmVOYW1lXVxuICAgICAqL1xuICAgIG5hdGl2ZU5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBVc2VyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDdXJyZW5jeX0gW2N1cnJlbmN5XVxuICAgICAqL1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3VzdG9tZXJJZF1cbiAgICAgKi9cbiAgICBjdXN0b21lcklkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkZWFjdGl2YXRpb25EYXRlXVxuICAgICAqL1xuICAgIGRlYWN0aXZhdGlvbkRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWZhdWx0QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWZhdWx0QWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGlzcGxheVVpZF1cbiAgICAgKi9cbiAgICBkaXNwbGF5VWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZpcnN0TmFtZV1cbiAgICAgKi9cbiAgICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TGFuZ3VhZ2V9IFtsYW5ndWFnZV1cbiAgICAgKi9cbiAgICBsYW5ndWFnZT86IExhbmd1YWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xhc3ROYW1lXVxuICAgICAqL1xuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZUNvZGVdXG4gICAgICovXG4gICAgdGl0bGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXZpZXcuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJldmlldyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYWxpYXNdXG4gICAgICovXG4gICAgYWxpYXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29tbWVudF1cbiAgICAgKi9cbiAgICBjb21tZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkYXRlXVxuICAgICAqL1xuICAgIGRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2hlYWRsaW5lXVxuICAgICAqL1xuICAgIGhlYWRsaW5lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1VzZXJ9IFtwcmluY2lwYWxdXG4gICAgICovXG4gICAgcHJpbmNpcGFsPzogVXNlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtyYXRpbmddXG4gICAgICovXG4gICAgcmF0aW5nPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudENhdGVnb3J5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50Q2F0ZWdvcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtoYXNJbWFnZV1cbiAgICAgKi9cbiAgICBoYXNJbWFnZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ByaW9yaXR5XVxuICAgICAqL1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudFZhbHVlQ2F0ZWdvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRWYWx1ZUNhdGVnb3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc2VxdWVuY2VdXG4gICAgICovXG4gICAgc2VxdWVuY2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudENhdGVnb3J5W119IFtzdXBlckNhdGVnb3JpZXNdXG4gICAgICovXG4gICAgc3VwZXJDYXRlZ29yaWVzPzogVmFyaWFudENhdGVnb3J5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50TWF0cml4RWxlbWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudE1hdHJpeEVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRNYXRyaXhFbGVtZW50W119IFtlbGVtZW50c11cbiAgICAgKi9cbiAgICBlbGVtZW50cz86IFZhcmlhbnRNYXRyaXhFbGVtZW50W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2lzTGVhZl1cbiAgICAgKi9cbiAgICBpc0xlYWY/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRDYXRlZ29yeX0gW3BhcmVudFZhcmlhbnRDYXRlZ29yeV1cbiAgICAgKi9cbiAgICBwYXJlbnRWYXJpYW50Q2F0ZWdvcnk/OiBWYXJpYW50Q2F0ZWdvcnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbn0gW3ZhcmlhbnRPcHRpb25dXG4gICAgICovXG4gICAgdmFyaWFudE9wdGlvbj86IFZhcmlhbnRPcHRpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudFZhbHVlQ2F0ZWdvcnl9IFt2YXJpYW50VmFsdWVDYXRlZ29yeV1cbiAgICAgKi9cbiAgICB2YXJpYW50VmFsdWVDYXRlZ29yeT86IFZhcmlhbnRWYWx1ZUNhdGVnb3J5O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2F2YWlsYWJsZUZvclBpY2t1cF1cbiAgICAgKi9cbiAgICBhdmFpbGFibGVGb3JQaWNrdXA/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2F2ZXJhZ2VSYXRpbmddXG4gICAgICovXG4gICAgYXZlcmFnZVJhdGluZz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtCYXNlT3B0aW9uW119IFtiYXNlT3B0aW9uc11cbiAgICAgKi9cbiAgICBiYXNlT3B0aW9ucz86IEJhc2VPcHRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtiYXNlUHJvZHVjdF1cbiAgICAgKi9cbiAgICBiYXNlUHJvZHVjdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeVtdfSBbY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDbGFzc2lmaWNhdGlvbltdfSBbY2xhc3NpZmljYXRpb25zXVxuICAgICAqL1xuICAgIGNsYXNzaWZpY2F0aW9ucz86IENsYXNzaWZpY2F0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1dHVyZVN0b2NrW119IFtmdXR1cmVTdG9ja3NdXG4gICAgICovXG4gICAgZnV0dXJlU3RvY2tzPzogRnV0dXJlU3RvY2tbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVtdfSBbaW1hZ2VzXVxuICAgICAqL1xuICAgIGltYWdlcz86IEltYWdlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbWFudWZhY3R1cmVyXVxuICAgICAqL1xuICAgIG1hbnVmYWN0dXJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbXVsdGlkaW1lbnNpb25hbF1cbiAgICAgKi9cbiAgICBtdWx0aWRpbWVuc2lvbmFsPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbnVtYmVyT2ZSZXZpZXdzXVxuICAgICAqL1xuICAgIG51bWJlck9mUmV2aWV3cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25bXX0gW3BvdGVudGlhbFByb21vdGlvbnNdXG4gICAgICovXG4gICAgcG90ZW50aWFsUHJvbW90aW9ucz86IFByb21vdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcHJpY2VdXG4gICAgICovXG4gICAgcHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZVJhbmdlfSBbcHJpY2VSYW5nZV1cbiAgICAgKi9cbiAgICBwcmljZVJhbmdlPzogUHJpY2VSYW5nZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0UmVmZXJlbmNlW119IFtwcm9kdWN0UmVmZXJlbmNlc11cbiAgICAgKi9cbiAgICBwcm9kdWN0UmVmZXJlbmNlcz86IFByb2R1Y3RSZWZlcmVuY2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbcHVyY2hhc2FibGVdXG4gICAgICovXG4gICAgcHVyY2hhc2FibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Jldmlld1tdfSBbcmV2aWV3c11cbiAgICAgKi9cbiAgICByZXZpZXdzPzogUmV2aWV3W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja11cbiAgICAgKi9cbiAgICBzdG9jaz86IFN0b2NrO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1bW1hcnldXG4gICAgICovXG4gICAgc3VtbWFyeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRNYXRyaXhFbGVtZW50W119IFt2YXJpYW50TWF0cml4XVxuICAgICAqL1xuICAgIHZhcmlhbnRNYXRyaXg/OiBWYXJpYW50TWF0cml4RWxlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb25bXX0gW3ZhcmlhbnRPcHRpb25zXVxuICAgICAqL1xuICAgIHZhcmlhbnRPcHRpb25zPzogVmFyaWFudE9wdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhcmlhbnRUeXBlXVxuICAgICAqL1xuICAgIHZhcmlhbnRUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlW119IFt2b2x1bWVQcmljZXNdXG4gICAgICovXG4gICAgdm9sdW1lUHJpY2VzPzogUHJpY2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdm9sdW1lUHJpY2VzRmxhZ11cbiAgICAgKi9cbiAgICB2b2x1bWVQcmljZXNGbGFnPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyRW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyRW50cnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbYmFzZVByaWNlXVxuICAgICAqL1xuICAgIGJhc2VQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZX0gW2RlbGl2ZXJ5TW9kZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2V9IFtkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtlbnRyeU51bWJlcl1cbiAgICAgKi9cbiAgICBlbnRyeU51bWJlcj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0fSBbcHJvZHVjdF1cbiAgICAgKi9cbiAgICBwcm9kdWN0PzogUHJvZHVjdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt1cGRhdGVhYmxlXVxuICAgICAqL1xuICAgIHVwZGF0ZWFibGU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRGVsaXZlcnlPcmRlckVudHJ5R3JvdXAuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbZGVsaXZlcnlBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5QWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBheW1lbnREZXRhaWxzLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYXltZW50RGV0YWlscyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYWNjb3VudEhvbGRlck5hbWVdXG4gICAgICovXG4gICAgYWNjb3VudEhvbGRlck5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2JpbGxpbmdBZGRyZXNzXVxuICAgICAqL1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXJkTnVtYmVyXVxuICAgICAqL1xuICAgIGNhcmROdW1iZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2FyZFR5cGV9IFtjYXJkVHlwZV1cbiAgICAgKi9cbiAgICBjYXJkVHlwZT86IENhcmRUeXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2N2bl1cbiAgICAgKi9cbiAgICBjdm4/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlZmF1bHRQYXltZW50XVxuICAgICAqL1xuICAgIGRlZmF1bHRQYXltZW50PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtleHBpcnlNb250aF1cbiAgICAgKi9cbiAgICBleHBpcnlNb250aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtleHBpcnlZZWFyXVxuICAgICAqL1xuICAgIGV4cGlyeVllYXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNzdWVOdW1iZXJdXG4gICAgICovXG4gICAgaXNzdWVOdW1iZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NhdmVkXVxuICAgICAqL1xuICAgIHNhdmVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGFydE1vbnRoXVxuICAgICAqL1xuICAgIHN0YXJ0TW9udGg/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhcnRZZWFyXVxuICAgICAqL1xuICAgIHN0YXJ0WWVhcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWJzY3JpcHRpb25JZF1cbiAgICAgKi9cbiAgICBzdWJzY3JpcHRpb25JZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBpY2t1cE9yZGVyRW50cnlHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGlja3VwT3JkZXJFbnRyeUdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZX0gW2RlbGl2ZXJ5UG9pbnRPZlNlcnZpY2VdXG4gICAgICovXG4gICAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2Rpc3RhbmNlXVxuICAgICAqL1xuICAgIGRpc3RhbmNlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VXaXRoVGF4XVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcmluY2lwYWwuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByaW5jaXBhbCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJ0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJ0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW2FwcGxpZWRPcmRlclByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZvdWNoZXJbXX0gW2FwcGxpZWRWb3VjaGVyc11cbiAgICAgKi9cbiAgICBhcHBsaWVkVm91Y2hlcnM/OiBWb3VjaGVyW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NhbGN1bGF0ZWRdXG4gICAgICovXG4gICAgY2FsY3VsYXRlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWxpdmVyeUFkZHJlc3NdXG4gICAgICovXG4gICAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2RlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkZWxpdmVyeUl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgZGVsaXZlcnlJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZX0gW2RlbGl2ZXJ5TW9kZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXX0gW2RlbGl2ZXJ5T3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgZGVsaXZlcnlPcmRlckdyb3Vwcz86IERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtleHBpcmF0aW9uVGltZV1cbiAgICAgKi9cbiAgICBleHBpcmF0aW9uVGltZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZ3VpZF1cbiAgICAgKi9cbiAgICBndWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbmV0XVxuICAgICAqL1xuICAgIG5ldD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtvcmRlckRpc2NvdW50c11cbiAgICAgKi9cbiAgICBvcmRlckRpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BheW1lbnREZXRhaWxzfSBbcGF5bWVudEluZm9dXG4gICAgICovXG4gICAgcGF5bWVudEluZm8/OiBQYXltZW50RGV0YWlscztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwaWNrdXBJdGVtc1F1YW50aXR5XVxuICAgICAqL1xuICAgIHBpY2t1cEl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGlja3VwT3JkZXJFbnRyeUdyb3VwW119IFtwaWNrdXBPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBwaWNrdXBPcmRlckdyb3Vwcz86IFBpY2t1cE9yZGVyRW50cnlHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbcG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHBvdGVudGlhbE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNdXG4gICAgICovXG4gICAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3Byb2R1Y3REaXNjb3VudHNdXG4gICAgICovXG4gICAgcHJvZHVjdERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtzYXZlVGltZV1cbiAgICAgKi9cbiAgICBzYXZlVGltZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsfSBbc2F2ZWRCeV1cbiAgICAgKi9cbiAgICBzYXZlZEJ5PzogUHJpbmNpcGFsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3NpdGVdXG4gICAgICovXG4gICAgc2l0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZV1cbiAgICAgKi9cbiAgICBzdG9yZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3N1YlRvdGFsXVxuICAgICAqL1xuICAgIHN1YlRvdGFsPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbERpc2NvdW50c11cbiAgICAgKi9cbiAgICB0b3RhbERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsSXRlbXNdXG4gICAgICovXG4gICAgdG90YWxJdGVtcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsVGF4XVxuICAgICAqL1xuICAgIHRvdGFsVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxVbml0Q291bnRdXG4gICAgICovXG4gICAgdG90YWxVbml0Q291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsfSBbdXNlcl1cbiAgICAgKi9cbiAgICB1c2VyPzogUHJpbmNpcGFsO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FydExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcnRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJ0W119IFtjYXJ0c11cbiAgICAgKi9cbiAgICBjYXJ0cz86IENhcnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcnRNb2RpZmljYXRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcnRNb2RpZmljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtkZWxpdmVyeU1vZGVDaGFuZ2VkXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZUNoYW5nZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnl9IFtlbnRyeV1cbiAgICAgKi9cbiAgICBlbnRyeT86IE9yZGVyRW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHlBZGRlZF1cbiAgICAgKi9cbiAgICBxdWFudGl0eUFkZGVkPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0NvZGVdXG4gICAgICovXG4gICAgc3RhdHVzQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNNZXNzYWdlXVxuICAgICAqL1xuICAgIHN0YXR1c01lc3NhZ2U/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRlZ29yeUhpZXJhcmNoeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlIaWVyYXJjaHkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtsYXN0TW9kaWZpZWRdXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0ZWdvcnlIaWVyYXJjaHlbXX0gW3N1YmNhdGVnb3JpZXNdXG4gICAgICovXG4gICAgc3ViY2F0ZWdvcmllcz86IENhdGVnb3J5SGllcmFyY2h5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGFsb2dWZXJzaW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nVmVyc2lvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0ZWdvcnlIaWVyYXJjaHlbXX0gW2NhdGVnb3JpZXNdXG4gICAgICovXG4gICAgY2F0ZWdvcmllcz86IENhdGVnb3J5SGllcmFyY2h5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0YWxvZ1ZlcnNpb25bXX0gW2NhdGFsb2dWZXJzaW9uc11cbiAgICAgKi9cbiAgICBjYXRhbG9nVmVyc2lvbnM/OiBDYXRhbG9nVmVyc2lvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtsYXN0TW9kaWZpZWRdXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGFsb2dMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0YWxvZ1tdfSBbY2F0YWxvZ3NdXG4gICAgICovXG4gICAgY2F0YWxvZ3M/OiBDYXRhbG9nW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb21wb25lbnRJRExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudElETGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119IFtpZExpc3RdXG4gICAgICovXG4gICAgaWRMaXN0Pzogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb25zaWdubWVudEVudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudEVudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5fSBbb3JkZXJFbnRyeV1cbiAgICAgKi9cbiAgICBvcmRlckVudHJ5PzogT3JkZXJFbnRyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzaGlwcGVkUXVhbnRpdHldXG4gICAgICovXG4gICAgc2hpcHBlZFF1YW50aXR5PzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29uc2lnbm1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2V9IFtkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb25zaWdubWVudEVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBDb25zaWdubWVudEVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW3NoaXBwaW5nQWRkcmVzc11cbiAgICAgKi9cbiAgICBzaGlwcGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c11cbiAgICAgKi9cbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3N0YXR1c0RhdGVdXG4gICAgICovXG4gICAgc3RhdHVzRGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHJhY2tpbmdJRF1cbiAgICAgKi9cbiAgICB0cmFja2luZ0lEPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ291bnRyeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvdW50cnlMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb3VudHJ5W119IFtjb3VudHJpZXNdXG4gICAgICovXG4gICAgY291bnRyaWVzPzogQ291bnRyeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ3VycmVuY3lMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1cnJlbmN5W119IFtjdXJyZW5jaWVzXVxuICAgICAqL1xuICAgIGN1cnJlbmNpZXM/OiBDdXJyZW5jeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ3VzdG9tZXJDb3Vwb25cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJDb3Vwb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvdXBvbklkXVxuICAgICAqL1xuICAgIGNvdXBvbklkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGFydERhdGVdXG4gICAgICovXG4gICAgc3RhcnREYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2VuZERhdGVdXG4gICAgICovXG4gICAgZW5kRGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtlbmREYXRlXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbm90aWZpY2F0aW9uT25dXG4gICAgICovXG4gICAgbm90aWZpY2F0aW9uT24/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthbGxQcm9kdWN0c0FwcGxpY2FibGVdXG4gICAgICovXG4gICAgYWxsUHJvZHVjdHNBcHBsaWNhYmxlPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0XG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEN1c3RvbWVyQ291cG9uU2VhcmNoUmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDdXN0b21lckNvdXBvbltdfSBbY291cG9uc11cbiAgICAgKi9cbiAgICBjb3Vwb25zPzogQ3VzdG9tZXJDb3Vwb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0W119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9ufSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIERlbGl2ZXJ5TW9kZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5TW9kZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZVtdfSBbZGVsaXZlcnlNb2Rlc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGVzPzogRGVsaXZlcnlNb2RlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGYWNldFZhbHVlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGYWNldFZhbHVlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjb3VudF1cbiAgICAgKi9cbiAgICBjb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFtxdWVyeV1cbiAgICAgKi9cbiAgICBxdWVyeT86IFNlYXJjaFN0YXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzZWxlY3RlZF1cbiAgICAgKi9cbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGYWNldC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmFjZXQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjYXRlZ29yeV1cbiAgICAgKi9cbiAgICBjYXRlZ29yeT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW211bHRpU2VsZWN0XVxuICAgICAqL1xuICAgIG11bHRpU2VsZWN0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmFjZXRWYWx1ZVtdfSBbdG9wVmFsdWVzXVxuICAgICAqL1xuICAgIHRvcFZhbHVlcz86IEZhY2V0VmFsdWVbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGYWNldFZhbHVlW119IFt2YWx1ZXNdXG4gICAgICovXG4gICAgdmFsdWVzPzogRmFjZXRWYWx1ZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt2aXNpYmxlXVxuICAgICAqL1xuICAgIHZpc2libGU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTGFuZ3VhZ2VMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBMYW5ndWFnZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0xhbmd1YWdlW119IFtsYW5ndWFnZXNdXG4gICAgICovXG4gICAgbGFuZ3VhZ2VzPzogTGFuZ3VhZ2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBhZ2luYXRpb24uXG4gICAqIFBhZ2luYXRpb24gaW5mb1xuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjb3VudF0gTnVtYmVyIG9mIGVsZW1lbnRzIG9uIHRoaXMgcGFnZVxuICAgICAqL1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BhZ2VdIEN1cnJlbnQgcGFnZSBudW1iZXJcbiAgICAgKi9cbiAgICBwYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsQ291bnRdIFRvdGFsIG51bWJlciBvZiBlbGVtZW50c1xuICAgICAqL1xuICAgIHRvdGFsQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxQYWdlc10gVG90YWwgbnVtYmVyIG9mIHBhZ2VzXG4gICAgICovXG4gICAgdG90YWxQYWdlcz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNvcnQuXG4gICAqIFNvcnQgb3B0aW9uXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNvcnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthc2NdXG4gICAgICovXG4gICAgYXNjPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBMaXN0QWRhcHRlZENvbXBvbmVudHMuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIExpc3RBZGFwdGVkQ29tcG9uZW50cyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55W119IFtjb21wb25lbnRzXVxuICAgICAqL1xuICAgIGNvbXBvbmVudHM/OiBhbnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9ufSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0W119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE1lbWJlckxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE1lbWJlckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaW5jaXBhbFtdfSBbbWVtYmVyc11cbiAgICAgKi9cbiAgICBtZW1iZXJzPzogUHJpbmNpcGFsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckVudHJ5TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJFbnRyeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW29yZGVyRW50cmllc11cbiAgICAgKi9cbiAgICBvcmRlckVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckhpc3RvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVySGlzdG9yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2d1aWRdXG4gICAgICovXG4gICAgZ3VpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbcGxhY2VkXVxuICAgICAqL1xuICAgIHBsYWNlZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNEaXNwbGF5XVxuICAgICAqL1xuICAgIHN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbF1cbiAgICAgKi9cbiAgICB0b3RhbD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGFnaW5hdGlvbk1vZGVsLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uTW9kZWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2N1cnJlbnRQYWdlXVxuICAgICAqL1xuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BhZ2VTaXplXVxuICAgICAqL1xuICAgIHBhZ2VTaXplPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3NvcnRdXG4gICAgICovXG4gICAgc29ydD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VzXVxuICAgICAqL1xuICAgIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxSZXN1bHRzXVxuICAgICAqL1xuICAgIHRvdGFsUmVzdWx0cz86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNvcnRNb2RlbC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU29ydE1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzZWxlY3RlZF1cbiAgICAgKi9cbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlckhpc3RvcnlMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckhpc3RvcnlMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckhpc3RvcnlbXX0gW29yZGVyc11cbiAgICAgKi9cbiAgICBvcmRlcnM/OiBPcmRlckhpc3RvcnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9uTW9kZWx9IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydE1vZGVsW119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Jhc2VTaXRlSWRdXG4gICAgICovXG4gICAgYmFzZVNpdGVJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyU3RhdHVzVXBkYXRlRWxlbWVudFtdfSBbb3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50c11cbiAgICAgKi9cbiAgICBvcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRzPzogT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlci5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZE9yZGVyUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkUHJvZHVjdFByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Vm91Y2hlcltdfSBbYXBwbGllZFZvdWNoZXJzXVxuICAgICAqL1xuICAgIGFwcGxpZWRWb3VjaGVycz86IFZvdWNoZXJbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2FsY3VsYXRlZF1cbiAgICAgKi9cbiAgICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29uc2lnbm1lbnRbXX0gW2NvbnNpZ25tZW50c11cbiAgICAgKi9cbiAgICBjb25zaWdubWVudHM/OiBDb25zaWdubWVudFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtjcmVhdGVkXVxuICAgICAqL1xuICAgIGNyZWF0ZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWxpdmVyeUFkZHJlc3NdXG4gICAgICovXG4gICAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2RlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkZWxpdmVyeUl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgZGVsaXZlcnlJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZX0gW2RlbGl2ZXJ5TW9kZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXX0gW2RlbGl2ZXJ5T3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgZGVsaXZlcnlPcmRlckdyb3Vwcz86IERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVsaXZlcnlTdGF0dXNdXG4gICAgICovXG4gICAgZGVsaXZlcnlTdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVsaXZlcnlTdGF0dXNEaXNwbGF5XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5U3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2d1ZXN0Q3VzdG9tZXJdXG4gICAgICovXG4gICAgZ3Vlc3RDdXN0b21lcj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZ3VpZF1cbiAgICAgKi9cbiAgICBndWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtuZXRdXG4gICAgICovXG4gICAgbmV0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW29yZGVyRGlzY291bnRzXVxuICAgICAqL1xuICAgIG9yZGVyRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudERldGFpbHN9IFtwYXltZW50SW5mb11cbiAgICAgKi9cbiAgICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BpY2t1cEl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgcGlja3VwSXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQaWNrdXBPcmRlckVudHJ5R3JvdXBbXX0gW3BpY2t1cE9yZGVyR3JvdXBzXVxuICAgICAqL1xuICAgIHBpY2t1cE9yZGVyR3JvdXBzPzogUGlja3VwT3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcm9kdWN0RGlzY291bnRzXVxuICAgICAqL1xuICAgIHByb2R1Y3REaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzaXRlXVxuICAgICAqL1xuICAgIHNpdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNEaXNwbGF5XVxuICAgICAqL1xuICAgIHN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvcmVdXG4gICAgICovXG4gICAgc3RvcmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtzdWJUb3RhbF1cbiAgICAgKi9cbiAgICBzdWJUb3RhbD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxEaXNjb3VudHNdXG4gICAgICovXG4gICAgdG90YWxEaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbEl0ZW1zXVxuICAgICAqL1xuICAgIHRvdGFsSXRlbXM/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlXVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VXaXRoVGF4XVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFRheD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW3VuY29uc2lnbmVkRW50cmllc11cbiAgICAgKi9cbiAgICB1bmNvbnNpZ25lZEVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsfSBbdXNlcl1cbiAgICAgKi9cbiAgICB1c2VyPzogUHJpbmNpcGFsO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmV0dXJuUmVxdWVzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuUmVxdWVzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NhbmNlbGxhYmxlXVxuICAgICAqL1xuICAgIGNhbmNlbGxhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2NyZWF0aW9uVGltZV1cbiAgICAgKi9cbiAgICBjcmVhdGlvblRpbWU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge29yZGVyfSBbb3JkZXJdXG4gICAgICovXG4gICAgb3JkZXI/OiBPcmRlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbcmVmdW5kRGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIHJlZnVuZERlbGl2ZXJ5Q29zdD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmV0dXJuUmVxdWVzdEVudHJ5W119IFtyZXR1cm5FbnRyaWVzXVxuICAgICAqL1xuICAgIHJldHVybkVudHJpZXM/OiBSZXR1cm5SZXF1ZXN0RW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtyZXR1cm5MYWJlbERvd25sb2FkVXJsXVxuICAgICAqL1xuICAgIHJldHVybkxhYmVsRG93bmxvYWRVcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcm1hXVxuICAgICAqL1xuICAgIHJtYT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbc3ViVG90YWxdXG4gICAgICovXG4gICAgc3ViVG90YWw/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmV0dXJuUmVxdWVzdEVudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXR1cm5SZXF1ZXN0RW50cnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnl9IFtvcmRlckVudHJ5XVxuICAgICAqL1xuICAgIG9yZGVyRW50cnk/OiBPcmRlckVudHJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2V4cGVjdGVkUXVhbnRpdHldXG4gICAgICovXG4gICAgZXhwZWN0ZWRRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3JlZnVuZEFtb3VudF1cbiAgICAgKi9cbiAgICByZWZ1bmRBbW91bnQ/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBheW1lbnREZXRhaWxzTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudERldGFpbHNMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYXltZW50RGV0YWlsc1tdfSBbcGF5bWVudHNdXG4gICAgICovXG4gICAgcGF5bWVudHM/OiBQYXltZW50RGV0YWlsc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUG9pbnRPZlNlcnZpY2VTdG9jay5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUG9pbnRPZlNlcnZpY2VTdG9jayB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2FkZHJlc3NdXG4gICAgICovXG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGlzcGxheU5hbWVdXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGlzdGFuY2VLbV1cbiAgICAgKi9cbiAgICBkaXN0YW5jZUttPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3sgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nIH19IFtmZWF0dXJlc11cbiAgICAgKi9cbiAgICBmZWF0dXJlcz86IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkRGlzdGFuY2VdXG4gICAgICovXG4gICAgZm9ybWF0dGVkRGlzdGFuY2U/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7R2VvUG9pbnR9IFtnZW9Qb2ludF1cbiAgICAgKi9cbiAgICBnZW9Qb2ludD86IEdlb1BvaW50O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbbWFwSWNvbl1cbiAgICAgKi9cbiAgICBtYXBJY29uPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09wZW5pbmdTY2hlZHVsZX0gW29wZW5pbmdIb3Vyc11cbiAgICAgKi9cbiAgICBvcGVuaW5nSG91cnM/OiBPcGVuaW5nU2NoZWR1bGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja0luZm9dXG4gICAgICovXG4gICAgc3RvY2tJbmZvPzogU3RvY2s7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvcmVDb250ZW50XVxuICAgICAqL1xuICAgIHN0b3JlQ29udGVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVtdfSBbc3RvcmVJbWFnZXNdXG4gICAgICovXG4gICAgc3RvcmVJbWFnZXM/OiBJbWFnZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2F0YWxvZ0lkXVxuICAgICAqL1xuICAgIGNhdGFsb2dJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXRhbG9nVmVyc2lvbl1cbiAgICAgKi9cbiAgICBjYXRhbG9nVmVyc2lvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRbXX0gW3Byb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudHNdXG4gICAgICovXG4gICAgcHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50cz86IFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXRhbG9nXVxuICAgICAqL1xuICAgIGNhdGFsb2c/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbY3VycmVudFBhZ2VdXG4gICAgICovXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdFtdfSBbcHJvZHVjdHNdXG4gICAgICovXG4gICAgcHJvZHVjdHM/OiBQcm9kdWN0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxQYWdlQ291bnRdXG4gICAgICovXG4gICAgdG90YWxQYWdlQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxQcm9kdWN0Q291bnRdXG4gICAgICovXG4gICAgdG90YWxQcm9kdWN0Q291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmVyc2lvbl1cbiAgICAgKi9cbiAgICB2ZXJzaW9uPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdFJlZmVyZW5jZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RSZWZlcmVuY2VMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0UmVmZXJlbmNlW119IFtyZWZlcmVuY2VzXVxuICAgICAqL1xuICAgIHJlZmVyZW5jZXM/OiBQcm9kdWN0UmVmZXJlbmNlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTcGVsbGluZ1N1Z2dlc3Rpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNwZWxsaW5nU3VnZ2VzdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcXVlcnldXG4gICAgICovXG4gICAgcXVlcnk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3VnZ2VzdGlvbl1cbiAgICAgKi9cbiAgICBzdWdnZXN0aW9uPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdFNlYXJjaFBhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RTZWFyY2hQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtCcmVhZGNydW1iW119IFticmVhZGNydW1ic11cbiAgICAgKi9cbiAgICBicmVhZGNydW1icz86IEJyZWFkY3J1bWJbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXRlZ29yeUNvZGVdXG4gICAgICovXG4gICAgY2F0ZWdvcnlDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFN0YXRlfSBbY3VycmVudFF1ZXJ5XVxuICAgICAqL1xuICAgIGN1cnJlbnRRdWVyeT86IFNlYXJjaFN0YXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZhY2V0W119IFtmYWNldHNdXG4gICAgICovXG4gICAgZmFjZXRzPzogRmFjZXRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmcmVlVGV4dFNlYXJjaF1cbiAgICAgKi9cbiAgICBmcmVlVGV4dFNlYXJjaD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtrZXl3b3JkUmVkaXJlY3RVcmxdXG4gICAgICovXG4gICAga2V5d29yZFJlZGlyZWN0VXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0W119IFtwcm9kdWN0c11cbiAgICAgKi9cbiAgICBwcm9kdWN0cz86IFByb2R1Y3RbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3BlbGxpbmdTdWdnZXN0aW9ufSBbc3BlbGxpbmdTdWdnZXN0aW9uXVxuICAgICAqL1xuICAgIHNwZWxsaW5nU3VnZ2VzdGlvbj86IFNwZWxsaW5nU3VnZ2VzdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvbkxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvbkxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvbltdfSBbcHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25zPzogUHJvbW90aW9uW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25SZXN1bHRMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25SZXN1bHRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW3Byb21vdGlvbnNdXG4gICAgICovXG4gICAgcHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmV2aWV3TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmV2aWV3TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmV2aWV3W119IFtyZXZpZXdzXVxuICAgICAqL1xuICAgIHJldmlld3M/OiBSZXZpZXdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNhdmVDYXJ0UmVzdWx0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTYXZlQ2FydFJlc3VsdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2FydH0gW3NhdmVkQ2FydERhdGFdXG4gICAgICovXG4gICAgc2F2ZWRDYXJ0RGF0YT86IENhcnQ7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdG9yZUZpbmRlclNlYXJjaFBhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFN0b3JlRmluZGVyU2VhcmNoUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRFYXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kRWFzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZE5vcnRoTGF0aXR1ZGVdXG4gICAgICovXG4gICAgYm91bmROb3J0aExhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kU291dGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZFNvdXRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRXZXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kV2VzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsb2NhdGlvblRleHRdXG4gICAgICovXG4gICAgbG9jYXRpb25UZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTGF0aXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIHNvdXJjZUxvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZVtdfSBbc3RvcmVzXVxuICAgICAqL1xuICAgIHN0b3Jlcz86IFBvaW50T2ZTZXJ2aWNlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdG9yZUZpbmRlclN0b2NrU2VhcmNoUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RvcmVGaW5kZXJTdG9ja1NlYXJjaFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kRWFzdExvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZEVhc3RMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmROb3J0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kTm9ydGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFNvdXRoTGF0aXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRTb3V0aExhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kV2VzdExvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZFdlc3RMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbG9jYXRpb25UZXh0XVxuICAgICAqL1xuICAgIGxvY2F0aW9uVGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9uTW9kZWx9IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdH0gW3Byb2R1Y3RdXG4gICAgICovXG4gICAgcHJvZHVjdD86IFByb2R1Y3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydE1vZGVsW119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NvdXJjZUxhdGl0dWRlXVxuICAgICAqL1xuICAgIHNvdXJjZUxhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NvdXJjZUxvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2VTdG9ja1tdfSBbc3RvcmVzXVxuICAgICAqL1xuICAgIHN0b3Jlcz86IFBvaW50T2ZTZXJ2aWNlU3RvY2tbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN1Z2dlc3Rpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3VnZ2VzdGlvbkxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFN1Z2dlc3Rpb25MaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdWdnZXN0aW9uW119IFtzdWdnZXN0aW9uc11cbiAgICAgKi9cbiAgICBzdWdnZXN0aW9ucz86IFN1Z2dlc3Rpb25bXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFRpdGxlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBUaXRsZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFRpdGxlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGl0bGVMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaXRsZVtdfSBbdGl0bGVzXVxuICAgICAqL1xuICAgIHRpdGxlcz86IFRpdGxlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBVc2VyR3JvdXAuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFVzZXJHcm91cCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsW119IFttZW1iZXJzXVxuICAgICAqL1xuICAgIG1lbWJlcnM/OiBQcmluY2lwYWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFttZW1iZXJzQ291bnRdXG4gICAgICovXG4gICAgbWVtYmVyc0NvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtVc2VyR3JvdXBbXX0gW3N1Ykdyb3Vwc11cbiAgICAgKi9cbiAgICBzdWJHcm91cHM/OiBVc2VyR3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUNvdW50IHtcbiAgICBjb3VudD86IG51bWJlcjtcbiAgICBpc29Db2RlPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdHlwZT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RvcmVDb3VudExpc3Qge1xuICAgIGNvdW50cmllc0FuZFJlZ2lvbnNTdG9yZUNvdW50PzogU3RvcmVDb3VudFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVm91Y2hlckxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZvdWNoZXJMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWb3VjaGVyW119IFt2b3VjaGVyc11cbiAgICAgKi9cbiAgICB2b3VjaGVycz86IFZvdWNoZXJbXTtcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgUHJpY2VUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JVWScsICdGUk9NJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBQcmljZVR5cGUgPSA8UHJpY2VUeXBlPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gUHJpY2VUeXBlIHtcbiAgICBCVVkgPSAnQlVZJyxcbiAgICBGUk9NID0gJ0ZST00nLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBJbWFnZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnUFJJTUFSWScsICdHQUxMRVJZJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBJbWFnZVR5cGUgPSA8SW1hZ2VUeXBlPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gSW1hZ2VUeXBlIHtcbiAgICBQUklNQVJZID0gJ1BSSU1BUlknLFxuICAgIEdBTExFUlkgPSAnR0FMTEVSWScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkcy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkcyA9IDxGaWVsZHM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxID0gPEZpZWxkczE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMiA9IDxGaWVsZHMyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMgPSA8RmllbGRzMz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0ID0gPEZpZWxkczQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNSA9IDxGaWVsZHM1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczYgPSA8RmllbGRzNj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIFBhZ2VUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0NvbnRlbnRQYWdlJywgJ1Byb2R1Y3RQYWdlJywgJ0NhdGVnb3J5UGFnZScsXG4gICAqICdDYXRhbG9nUGFnZSdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogUGFnZVR5cGUgPSA8UGFnZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBQYWdlVHlwZSB7XG4gICAgQ09OVEVOVF9QQUdFID0gJ0NvbnRlbnRQYWdlJyxcbiAgICBQUk9EVUNUX1BBR0UgPSAnUHJvZHVjdFBhZ2UnLFxuICAgIENBVEVHT1JZX1BBR0UgPSAnQ2F0ZWdvcnlQYWdlJyxcbiAgICBDQVRBTE9HX1BBR0UgPSAnQ2F0YWxvZ1BhZ2UnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNyA9IDxGaWVsZHM3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczggPSA8RmllbGRzOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM5ID0gPEZpZWxkczk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEwID0gPEZpZWxkczEwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczExLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTEgPSA8RmllbGRzMTE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxMiA9IDxGaWVsZHMxMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczEyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEzID0gPEZpZWxkczEzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTQgPSA8RmllbGRzMTQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNSA9IDxGaWVsZHMxNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE2ID0gPEZpZWxkczE2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIFNvcnRFbnVtLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogU29ydEVudW0gPSA8U29ydEVudW0+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBTb3J0RW51bSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNyA9IDxGaWVsZHMxNz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE4ID0gPEZpZWxkczE4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTkgPSA8RmllbGRzMTk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxOSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMCA9IDxGaWVsZHMyMD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIxID0gPEZpZWxkczIxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjIgPSA8RmllbGRzMjI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyMiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMyA9IDxGaWVsZHMyMz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI0ID0gPEZpZWxkczI0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjUgPSA8RmllbGRzMjU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyNiA9IDxGaWVsZHMyNj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI3ID0gPEZpZWxkczI3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjggPSA8RmllbGRzMjg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyOSA9IDxGaWVsZHMyOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMwID0gPEZpZWxkczMwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzEgPSA8RmllbGRzMzE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzMiA9IDxGaWVsZHMzMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMzID0gPEZpZWxkczMzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzQgPSA8RmllbGRzMzQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNSA9IDxGaWVsZHMzNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM2ID0gPEZpZWxkczM2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzcgPSA8RmllbGRzMzc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzOCA9IDxGaWVsZHMzOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM5ID0gPEZpZWxkczM5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDAgPSA8RmllbGRzNDA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MSA9IDxGaWVsZHM0MT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0Mi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQyID0gPEZpZWxkczQyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDMgPSA8RmllbGRzNDM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NCA9IDxGaWVsZHM0ND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0NS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ1ID0gPEZpZWxkczQ1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDYgPSA8RmllbGRzNDY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0NiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NyA9IDxGaWVsZHM0Nz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0OC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ4ID0gPEZpZWxkczQ4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDkgPSA8RmllbGRzNDk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0OSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MCA9IDxGaWVsZHM1MD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1MS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUxID0gPEZpZWxkczUxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTIgPSA8RmllbGRzNTI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1MiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MyA9IDxGaWVsZHM1Mz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1NC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU0ID0gPEZpZWxkczU0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTUgPSA8RmllbGRzNTU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1NiA9IDxGaWVsZHM1Nj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1Ny5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU3ID0gPEZpZWxkczU3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTggPSA8RmllbGRzNTg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1OCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1OSA9IDxGaWVsZHM1OT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM2MC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczYwID0gPEZpZWxkczYwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNjAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczYxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNjEgPSA8RmllbGRzNjE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM2MSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgVHlwZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdhbGwnLCAncHJvZHVjdCcsICdvcmRlcidcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogVHlwZSA9IDxUeXBlPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gVHlwZSB7XG4gICAgQWxsID0gJ2FsbCcsXG4gICAgUHJvZHVjdCA9ICdwcm9kdWN0JyxcbiAgICBPcmRlciA9ICdvcmRlcicsXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEFub255bW91c0NvbnNlbnQge1xuICAgIHRlbXBsYXRlQ29kZT86IHN0cmluZztcbiAgICB2ZXJzaW9uPzogbnVtYmVyO1xuICAgIGNvbnNlbnRTdGF0ZT86IENPTlNFTlRfU1RBVFVTO1xuICB9XG5cbiAgZXhwb3J0IGVudW0gQ09OU0VOVF9TVEFUVVMge1xuICAgIEFOT05ZTU9VU19DT05TRU5UX0dJVkVOID0gJ0dJVkVOJyxcbiAgICBBTk9OWU1PVVNfQ09OU0VOVF9XSVRIRFJBV04gPSAnV0lUSERSQVdOJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFRlbXBsYXRlIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgY3VycmVudENvbnNlbnQ/OiBDb25zZW50O1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50IHtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGNvbnNlbnRHaXZlbkRhdGU/OiBEYXRlO1xuICAgIGNvbnNlbnRXaXRoZHJhd25EYXRlPzogRGF0ZTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFRlbXBsYXRlTGlzdCB7XG4gICAgY29uc2VudFRlbXBsYXRlcz86IENvbnNlbnRUZW1wbGF0ZVtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCYXNlU2l0ZXMge1xuICAgIGJhc2VTaXRlcz86IEJhc2VTaXRlW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VTaXRlIHtcbiAgICBjaGFubmVsPzogc3RyaW5nO1xuICAgIGRlZmF1bHRMYW5ndWFnZT86IExhbmd1YWdlO1xuICAgIGRlZmF1bHRQcmV2aWV3Q2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgIGRlZmF1bHRQcmV2aWV3Q2F0ZWdvcnlDb2RlPzogc3RyaW5nO1xuICAgIGRlZmF1bHRQcmV2aWV3UHJvZHVjdENvZGU/OiBzdHJpbmc7XG4gICAgbG9jYWxlPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgdGhlbWU/OiBzdHJpbmc7XG4gICAgdWlkPzogc3RyaW5nO1xuICAgIHN0b3Jlcz86IEJhc2VTdG9yZVtdO1xuICAgIHVybFBhdHRlcm5zPzogc3RyaW5nW107XG4gICAgdXJsRW5jb2RpbmdBdHRyaWJ1dGVzPzogc3RyaW5nW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VTdG9yZSB7XG4gICAgY3VycmVuY2llcz86IEN1cnJlbmN5W107XG4gICAgZGVmYXVsdEN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgbGFuZ3VhZ2VzPzogTGFuZ3VhZ2VbXTtcbiAgICBkZWZhdWx0TGFuZ3VhZ2U/OiBMYW5ndWFnZTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEludGVyZXN0RW50cnkge1xuICAgIGludGVyZXN0VHlwZT86IE5vdGlmaWNhdGlvblR5cGU7XG4gICAgZGF0ZUFkZGVkPzogc3RyaW5nO1xuICAgIGV4cGlyYXRpb25EYXRlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SW50ZXJlc3RFbnRyeVJlbGF0aW9uIHtcbiAgICBwcm9kdWN0PzogUHJvZHVjdDtcbiAgICBwcm9kdWN0SW50ZXJlc3RFbnRyeT86IFByb2R1Y3RJbnRlcmVzdEVudHJ5W107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJbnRlcmVzdFNlYXJjaFJlc3VsdCB7XG4gICAgcmVzdWx0cz86IFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb25bXTtcbiAgICBzb3J0cz86IFNvcnRbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbjtcbiAgfVxuXG4gIGV4cG9ydCBlbnVtIE5vdGlmaWNhdGlvblR5cGUge1xuICAgIEJBQ0tfSU5fU1RPQ0sgPSAnQkFDS19JTl9TVE9DSycsXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJ1ZGdldCB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBidWRnZXQ/OiBudW1iZXI7XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICAgIGVuZERhdGU/OiBzdHJpbmc7XG4gICAgc3RhcnREYXRlPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgb3JnVW5pdD86IEIyQlVuaXQ7XG4gICAgY29zdENlbnRlcnM/OiBDb3N0Q2VudGVyW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJ1ZGdldHNMaXN0IHtcbiAgICBidWRnZXRzPzogQnVkZ2V0W107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb3N0Q2VudGVyIHtcbiAgICBhY3RpdmU/OiBzdHJpbmc7XG4gICAgYWN0aXZlRmxhZz86IGJvb2xlYW47XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgb3JpZ2luYWxDb2RlPzogc3RyaW5nO1xuICAgIHVuaXQ/OiBCMkJVbml0O1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb3N0Q2VudGVyc0xpc3Qge1xuICAgIGNvc3RDZW50ZXJzOiBDb3N0Q2VudGVyW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgLy8gVE9ETygjODg3OCk6IFdoaWNoIG1vZGVscyB3ZSBjYW4gcmVtb3ZlIGZyb20gaGVyZT9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmdVbml0VXNlckdyb3VwIHtcbiAgICBtZW1iZXJzPzogQjJCVXNlcltdO1xuICAgIG1lbWJlcnNDb3VuPzogbnVtYmVyO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgb3JnVW5pdD86IEIyQlVuaXQ7XG4gICAgcGVybWlzc2lvbnM/OiBQZXJtaXNzaW9uW107XG4gICAgcm9sZXM/OiBhbnk7XG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICAgIHN1Ykdyb3Vwcz86IGFueTtcbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZ1VuaXRVc2VyR3JvdXBMaXN0IHtcbiAgICBvcmdVbml0VXNlckdyb3VwczogT3JnVW5pdFVzZXJHcm91cFtdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQjJCVW5pdE5vZGUge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgY2hpbGRyZW4/OiBCMkJVbml0Tm9kZVtdO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGFyZW50Pzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCMkJVbml0Tm9kZUxpc3Qge1xuICAgIHVuaXROb2Rlcz86IEIyQlVuaXROb2RlW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEIyQlVzZXIgZXh0ZW5kcyBVc2VyIHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGFwcHJvdmVycz86IFtdO1xuICAgIG9yZ1VuaXQ/OiBCMkJVbml0O1xuICAgIHJvbGVzPzogc3RyaW5nW107XG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcmdVbml0VXNlckxpc3Qge1xuICAgIHVzZXJzOiBCMkJVc2VyW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCMkJBcHByb3ZhbFByb2Nlc3Mge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQjJCQXBwcm92YWxQcm9jZXNzTGlzdCB7XG4gICAgYXBwcm92YWxQcm9jZXNzZXM/OiBCMkJBcHByb3ZhbFByb2Nlc3NbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQjJCVW5pdCB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBhZGRyZXNzZXM/OiBBZGRyZXNzW107XG4gICAgdWlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgcGFyZW50T3JnVW5pdD86IFBhcnRpYWw8QjJCVW5pdD47XG4gICAgYXBwcm92YWxQcm9jZXNzPzogQjJCQXBwcm92YWxQcm9jZXNzO1xuICAgIGFkbWluaXN0cmF0b3JzPzogQjJCVXNlcltdO1xuICAgIGFwcHJvdmVycz86IEIyQlVzZXJbXTtcbiAgICBjdXN0b21lcnM/OiBCMkJVc2VyW107XG4gICAgbWFuYWdlcnM/OiBCMkJVc2VyW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZSB7XG4gICAgY29kZT86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGVMaXN0IHtcbiAgICBvcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGVzPzogT3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlW107XG4gIH1cblxuICBleHBvcnQgZW51bSBQZXJpb2Qge1xuICAgIERBWSA9ICdEQVknLFxuICAgIFdFRUsgPSAnV0VFSycsXG4gICAgTU9OVEggPSAnTU9OVEgnLFxuICAgIFFVQVJURVIgPSAnUVVBUlRFUicsXG4gICAgWUVBUiA9ICdZRUFSJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGVybWlzc2lvbiB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgb3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlPzogT3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlO1xuICAgIG9yZ1VuaXQ/OiBCMkJVbml0Tm9kZTtcbiAgICBwZXJpb2RSYW5nZT86IFBlcmlvZDtcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gICAgdHJlc2hvbGQ/OiBudW1iZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb25zTGlzdCB7XG4gICAgb3JkZXJBcHByb3ZhbFBlcm1pc3Npb25zPzogUGVybWlzc2lvbltdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVwbGVuaXNobWVudE9yZGVyIHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGFwcGxpZWRPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICBhcHBsaWVkVm91Y2hlcnM/OiBWb3VjaGVyW107XG4gICAgY2FsY3VsYXRlZD86IGJvb2xlYW47XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjb3N0Q2VudGVyPzogQ29zdENlbnRlcjtcbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIGRlbGl2ZXJ5SXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gICAgZGVsaXZlcnlPcmRlckdyb3Vwcz86IERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW107XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICBleHBpcmF0aW9uVGltZT86IHN0cmluZztcbiAgICBmaXJzdERhdGU/OiBzdHJpbmc7XG4gICAgZ3VpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIG5ldD86IGJvb2xlYW47XG4gICAgb3JkZXJEaXNjb3VudHM/OiBQcmljZTtcbiAgICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICAgIHBheW1lbnRTdGF0dXM/OiBzdHJpbmc7XG4gICAgcGF5bWVudFR5cGU/OiBQYXltZW50VHlwZTtcbiAgICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIHBpY2t1cE9yZGVyR3JvdXBzPzogUGlja3VwT3JkZXJFbnRyeUdyb3VwW107XG4gICAgcG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICBwcm9kdWN0RGlzY291bnRzPzogUHJpY2U7XG4gICAgcHVyY2hhc2VPcmRlck51bWJlcj86IHN0cmluZztcbiAgICByZXBsZW5pc2htZW50T3JkZXJDb2RlPzogc3RyaW5nO1xuICAgIHNhdmVUaW1lPzogc3RyaW5nO1xuICAgIHNhdmVkQnk/OiBQcmluY2lwYWw7XG4gICAgc2l0ZT86IHN0cmluZztcbiAgICBzdG9yZT86IHN0cmluZztcbiAgICBzdWJUb3RhbD86IFByaWNlO1xuICAgIHRvdGFsRGlzY291bnRzPzogUHJpY2U7XG4gICAgdG90YWxJdGVtcz86IG51bWJlcjtcbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgICB0b3RhbFRheD86IFByaWNlO1xuICAgIHRvdGFsVW5pdENvdW50PzogbnVtYmVyO1xuICAgIHRyaWdnZXI/OiBUcmlnZ2VyO1xuICAgIHVzZXI/OiBQcmluY2lwYWw7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFJlcGxlbmlzaG1lbnRPcmRlckxpc3Qge1xuICAgIHJlcGxlbmlzaG1lbnRPcmRlcnM/OiBSZXBsZW5pc2htZW50T3JkZXJbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFRyaWdnZXIge1xuICAgIGFjdGl2YXRpb25UaW1lPzogc3RyaW5nO1xuICAgIGRpc3BsYXlUaW1lVGFibGU/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFNjaGVkdWxlUmVwbGVuaXNobWVudEZvcm0ge1xuICAgIGRheXNPZldlZWs/OiBEYXlzT2ZXZWVrW107XG4gICAgbnRoRGF5T2ZNb250aD86IHN0cmluZztcbiAgICBudW1iZXJPZkRheXM/OiBzdHJpbmc7XG4gICAgbnVtYmVyT2ZXZWVrcz86IHN0cmluZztcbiAgICByZWN1cnJlbmNlUGVyaW9kPzogc3RyaW5nO1xuICAgIHJlcGxlbmlzaG1lbnRTdGFydERhdGU/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgZW51bSBEYXlzT2ZXZWVrIHtcbiAgICBNT05EQVkgPSAnTU9OREFZJyxcbiAgICBUVUVTREFZID0gJ1RVRVNEQVknLFxuICAgIFdFRE5FU0RBWSA9ICdXRURORVNEQVknLFxuICAgIFRIVVJTREFZID0gJ1RIVVJTREFZJyxcbiAgICBGUklEQVkgPSAnRlJJREFZJyxcbiAgICBTQVRVUkRBWSA9ICdTQVRVUkRBWScsXG4gICAgU1VOREFZID0gJ1NVTkRBWScsXG4gIH1cblxuICBleHBvcnQgZW51bSBPcmRlckFwcHJvdmFsRGVjaXNpb25WYWx1ZSB7XG4gICAgQVBQUk9WRSA9ICdBUFBST1ZFJyxcbiAgICBSRUpFQ1QgPSAnUkVKRUNUJyxcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWxEZWNpc2lvbiB7XG4gICAgZGVjaXNpb24/OiBPcmRlckFwcHJvdmFsRGVjaXNpb25WYWx1ZTtcbiAgICBjb21tZW50Pzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckFwcHJvdmFsUmVjb3JkIHtcbiAgICBhcHByb3Zlcj86IFByaW5jaXBhbDtcbiAgICBjb21tZW50cz86IHN0cmluZztcbiAgICBwZXJtaXNzaW9uVHlwZXM/OiBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGVbXTtcbiAgICBzdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckFwcHJvdmFsIHtcbiAgICBhcHByb3ZhbERlY2lzaW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY3VzdG9tZXJPcmRlckFwcHJvdmFsUmVjb3Jkcz86IE9yZGVyQXBwcm92YWxSZWNvcmRbXTtcbiAgICBtZXJjaGFudE9yZGVyQXBwcm92YWxSZWNvcmRzPzogT3JkZXJBcHByb3ZhbFJlY29yZFtdO1xuICAgIG9yZGVyPzogT3JkZXI7XG4gICAgdHJpZ2dlcj86IFRyaWdnZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWxzTGlzdCB7XG4gICAgb3JkZXJBcHByb3ZhbHM/OiBPcmRlckFwcHJvdmFsW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG59XG4iXX0=