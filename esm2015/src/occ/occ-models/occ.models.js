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
    let OrderApprovalDecisionValue;
    (function (OrderApprovalDecisionValue) {
        OrderApprovalDecisionValue["APPROVE"] = "APPROVE";
        OrderApprovalDecisionValue["REJECT"] = "REJECT";
    })(OrderApprovalDecisionValue = Occ.OrderApprovalDecisionValue || (Occ.OrderApprovalDecisionValue = {}));
})(Occ || (Occ = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL2NvcmUvc3JjL29jYy9vY2MtbW9kZWxzL29jYy5tb2RlbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxLQUFXLEdBQUcsQ0FrdUluQjtBQWx1SUQsV0FBaUIsR0FBRztJQTA1RmxCOzs7Ozs7Ozs7T0FTRztJQUNILElBQVksU0FHWDtJQUhELFdBQVksU0FBUztRQUNuQix3QkFBVyxDQUFBO1FBQ1gsMEJBQWEsQ0FBQTtJQUNmLENBQUMsRUFIVyxTQUFTLEdBQVQsYUFBUyxLQUFULGFBQVMsUUFHcEI7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxJQUFZLFNBR1g7SUFIRCxXQUFZLFNBQVM7UUFDbkIsZ0NBQW1CLENBQUE7UUFDbkIsZ0NBQW1CLENBQUE7SUFDckIsQ0FBQyxFQUhXLFNBQVMsR0FBVCxhQUFTLEtBQVQsYUFBUyxRQUdwQjtJQUVEOzs7Ozs7Ozs7T0FTRztJQUNILElBQVksTUFJWDtJQUpELFdBQVksTUFBTTtRQUNoQix5QkFBZSxDQUFBO1FBQ2YsNkJBQW1CLENBQUE7UUFDbkIsdUJBQWEsQ0FBQTtJQUNmLENBQUMsRUFKVyxNQUFNLEdBQU4sVUFBTSxLQUFOLFVBQU0sUUFJakI7SUFFRDs7Ozs7Ozs7O09BU0c7SUFDSCxJQUFZLE9BSVg7SUFKRCxXQUFZLE9BQU87UUFDakIsMEJBQWUsQ0FBQTtRQUNmLDhCQUFtQixDQUFBO1FBQ25CLHdCQUFhLENBQUE7SUFDZixDQUFDLEVBSlcsT0FBTyxHQUFQLFdBQU8sS0FBUCxXQUFPLFFBSWxCO0lBRUQ7Ozs7Ozs7OztPQVNHO0lBQ0gsSUFBWSxPQUlYO0lBSkQsV0FBWSxPQUFPO1FBQ2pCLDBCQUFlLENBQUE7UUFDZiw4QkFBbUIsQ0FBQTtRQUNuQix3QkFBYSxDQUFBO0lBQ2YsQ0FBQyxFQUpXLE9BQU8sR0FBUCxXQUFPLEtBQVAsV0FBTyxRQUlsQjtJQUVE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QUksUUFJZjtJQVFELElBQVksY0FHWDtJQUhELFdBQVksY0FBYztRQUN4QixtREFBaUMsQ0FBQTtRQUNqQywyREFBeUMsQ0FBQTtJQUMzQyxDQUFDLEVBSFcsY0FBYyxHQUFkLGtCQUFjLEtBQWQsa0JBQWMsUUFHekI7SUErREQsSUFBWSxnQkFFWDtJQUZELFdBQVksZ0JBQWdCO1FBQzFCLG1EQUErQixDQUFBO0lBQ2pDLENBQUMsRUFGVyxnQkFBZ0IsR0FBaEIsb0JBQWdCLEtBQWhCLG9CQUFnQixRQUUzQjtJQWtKRCxJQUFZLE1BTVg7SUFORCxXQUFZLE1BQU07UUFDaEIscUJBQVcsQ0FBQTtRQUNYLHVCQUFhLENBQUE7UUFDYix5QkFBZSxDQUFBO1FBQ2YsNkJBQW1CLENBQUE7UUFDbkIsdUJBQWEsQ0FBQTtJQUNmLENBQUMsRUFOVyxNQUFNLEdBQU4sVUFBTSxLQUFOLFVBQU0sUUFNakI7SUFtQkQsSUFBWSwwQkFHWDtJQUhELFdBQVksMEJBQTBCO1FBQ3BDLGlEQUFtQixDQUFBO1FBQ25CLCtDQUFpQixDQUFBO0lBQ25CLENBQUMsRUFIVywwQkFBMEIsR0FBMUIsOEJBQTBCLEtBQTFCLDhCQUEwQixRQUdyQztBQWdDSCxDQUFDLEVBbHVJZ0IsR0FBRyxLQUFILEdBQUcsUUFrdUluQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgT2NjIHtcbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ291bnRyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJlZ2lvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb3VudHJ5SXNvXVxuICAgICAqL1xuICAgIGNvdW50cnlJc28/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVTaG9ydF1cbiAgICAgKi9cbiAgICBpc29jb2RlU2hvcnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmVnaW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmVnaW9uW119IFtyZWdpb25zXVxuICAgICAqL1xuICAgIHJlZ2lvbnM/OiBSZWdpb25bXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEFkZHJlc3MuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbXBhbnlOYW1lXVxuICAgICAqL1xuICAgIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvdW50cnl9IFtjb3VudHJ5XVxuICAgICAqL1xuICAgIGNvdW50cnk/OiBDb3VudHJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtkZWZhdWx0QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWZhdWx0QWRkcmVzcz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZW1haWxdXG4gICAgICovXG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmlyc3ROYW1lXVxuICAgICAqL1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWRBZGRyZXNzXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZEFkZHJlc3M/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGFzdE5hbWVdXG4gICAgICovXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGluZTFdXG4gICAgICovXG4gICAgbGluZTE/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGluZTJdXG4gICAgICovXG4gICAgbGluZTI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcGhvbmVdXG4gICAgICovXG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcG9zdGFsQ29kZV1cbiAgICAgKi9cbiAgICBwb3N0YWxDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1JlZ2lvbn0gW3JlZ2lvbl1cbiAgICAgKi9cbiAgICByZWdpb24/OiBSZWdpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NoaXBwaW5nQWRkcmVzc11cbiAgICAgKi9cbiAgICBzaGlwcGluZ0FkZHJlc3M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlQ29kZV1cbiAgICAgKi9cbiAgICB0aXRsZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdG93bl1cbiAgICAgKi9cbiAgICB0b3duPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt2aXNpYmxlSW5BZGRyZXNzQm9va11cbiAgICAgKi9cbiAgICB2aXNpYmxlSW5BZGRyZXNzQm9vaz86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBBZGRyZXNzTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3NbXX0gW2FkZHJlc3Nlc11cbiAgICAgKi9cbiAgICBhZGRyZXNzZXM/OiBBZGRyZXNzW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBFcnJvck1vZGVsLlxuICAgKiBFcnJvciBtZXNzYWdlXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEVycm9yTW9kZWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW21lc3NhZ2VdIERlc2NyaXB0aXZlLCBodW1hbiByZWFkYWJsZSBlcnJvciBtZXNzYWdlLlxuICAgICAqL1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcmVhc29uXSBBZGRpdGlvbmFsIGNsYXNzaWZpY2F0aW9uIHNwZWNpZmljIGZvciBlYWNoXG4gICAgICogZXJyb3IgdHlwZSBlLmcuICdub1N0b2NrJy5cbiAgICAgKi9cbiAgICByZWFzb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ViamVjdF0gSWRlbnRpZmllciBvZiB0aGUgcmVsYXRlZCBvYmplY3QgZS5nLiAnMScuXG4gICAgICovXG4gICAgc3ViamVjdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWJqZWN0VHlwZV0gVHlwZSBvZiB0aGUgb2JqZWN0IHJlbGF0ZWQgdG8gdGhlIGVycm9yXG4gICAgICogZS5nLiAnZW50cnknLlxuICAgICAqL1xuICAgIHN1YmplY3RUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVdIFR5cGUgb2YgdGhlIGVycm9yIGUuZy4gJ0xvd1N0b2NrRXJyb3InLlxuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBFcnJvckxpc3QuXG4gICAqIExpc3Qgb2YgZXJyb3JzXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEVycm9yTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RXJyb3JNb2RlbFtdfSBbZXJyb3JzXVxuICAgICAqL1xuICAgIGVycm9ycz86IEVycm9yTW9kZWxbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEFkZHJlc3NWYWxpZGF0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzVmFsaWRhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVjaXNpb25dXG4gICAgICovXG4gICAgZGVjaXNpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RXJyb3JMaXN0fSBbZXJyb3JzXVxuICAgICAqL1xuICAgIGVycm9ycz86IEVycm9yTGlzdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzW119IFtzdWdnZXN0ZWRBZGRyZXNzZXNdXG4gICAgICovXG4gICAgc3VnZ2VzdGVkQWRkcmVzc2VzPzogQWRkcmVzc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJpY2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByaWNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjdXJyZW5jeUlzb11cbiAgICAgKi9cbiAgICBjdXJyZW5jeUlzbz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWRWYWx1ZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWRWYWx1ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFttYXhRdWFudGl0eV1cbiAgICAgKi9cbiAgICBtYXhRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFttaW5RdWFudGl0eV1cbiAgICAgKi9cbiAgICBtaW5RdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZVR5cGV9IFtwcmljZVR5cGVdIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQlVZJywgJ0ZST00nXG4gICAgICovXG4gICAgcHJpY2VUeXBlPzogUHJpY2VUeXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3RvY2suXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFN0b2NrIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzdG9ja0xldmVsXVxuICAgICAqL1xuICAgIHN0b2NrTGV2ZWw/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvY2tMZXZlbFN0YXR1c11cbiAgICAgKi9cbiAgICBzdG9ja0xldmVsU3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgSW1hZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEltYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthbHRUZXh0XVxuICAgICAqL1xuICAgIGFsdFRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0XVxuICAgICAqL1xuICAgIGZvcm1hdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtnYWxsZXJ5SW5kZXhdXG4gICAgICovXG4gICAgZ2FsbGVyeUluZGV4PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlVHlwZX0gW2ltYWdlVHlwZV0gUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdQUklNQVJZJyxcbiAgICAgKiAnR0FMTEVSWSdcbiAgICAgKi9cbiAgICBpbWFnZVR5cGU/OiBJbWFnZVR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbaW1hZ2VdXG4gICAgICovXG4gICAgaW1hZ2U/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcXVhbGlmaWVyXVxuICAgICAqL1xuICAgIHF1YWxpZmllcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRPcHRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3ByaWNlRGF0YV1cbiAgICAgKi9cbiAgICBwcmljZURhdGE/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrXVxuICAgICAqL1xuICAgIHN0b2NrPzogU3RvY2s7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9uUXVhbGlmaWVyW119IFt2YXJpYW50T3B0aW9uUXVhbGlmaWVyc11cbiAgICAgKi9cbiAgICB2YXJpYW50T3B0aW9uUXVhbGlmaWVycz86IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEJhc2VPcHRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb25bXX0gW29wdGlvbnNdXG4gICAgICovXG4gICAgb3B0aW9ucz86IFZhcmlhbnRPcHRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9ufSBbc2VsZWN0ZWRdXG4gICAgICovXG4gICAgc2VsZWN0ZWQ/OiBWYXJpYW50T3B0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhcmlhbnRUeXBlXVxuICAgICAqL1xuICAgIHZhcmlhbnRUeXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU2VhcmNoUXVlcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNlYXJjaFF1ZXJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNlYXJjaFN0YXRlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTdGF0ZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoUXVlcnl9IFtxdWVyeV1cbiAgICAgKi9cbiAgICBxdWVyeT86IFNlYXJjaFF1ZXJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBCcmVhZGNydW1iLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmYWNldENvZGVdXG4gICAgICovXG4gICAgZmFjZXRDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0TmFtZV1cbiAgICAgKi9cbiAgICBmYWNldE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXRWYWx1ZUNvZGVdXG4gICAgICovXG4gICAgZmFjZXRWYWx1ZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXRWYWx1ZU5hbWVdXG4gICAgICovXG4gICAgZmFjZXRWYWx1ZU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFtyZW1vdmVRdWVyeV1cbiAgICAgKi9cbiAgICByZW1vdmVRdWVyeT86IFNlYXJjaFN0YXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFN0YXRlfSBbdHJ1bmNhdGVRdWVyeV1cbiAgICAgKi9cbiAgICB0cnVuY2F0ZVF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb21wb25lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW21vZGlmaWVkVGltZV1cbiAgICAgKi9cbiAgICBtb2RpZmllZFRpbWU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnl9IFtvdGhlclByb3BlcnRpZXNdXG4gICAgICovXG4gICAgb3RoZXJQcm9wZXJ0aWVzPzogYW55O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVDb2RlXVxuICAgICAqL1xuICAgIHR5cGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb21wb25lbnRMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb21wb25lbnRbXX0gW2NvbXBvbmVudF1cbiAgICAgKi9cbiAgICBjb21wb25lbnQ/OiBDb21wb25lbnRbXSB8IGFueVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29udGVudFNsb3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnRlbnRTbG90IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb21wb25lbnRMaXN0fSBbY29tcG9uZW50c11cbiAgICAgKi9cbiAgICBjb21wb25lbnRzPzogQ29tcG9uZW50TGlzdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcG9zaXRpb25dXG4gICAgICovXG4gICAgcG9zaXRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2xvdElkXVxuICAgICAqL1xuICAgIHNsb3RJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2xvdFNoYXJlZF1cbiAgICAgKi9cbiAgICBzbG90U2hhcmVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzbG90U3RhdHVzXVxuICAgICAqL1xuICAgIHNsb3RTdGF0dXM/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb250ZW50U2xvdExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnRlbnRTbG90TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29udGVudFNsb3RbXX0gW2NvbnRlbnRTbG90XVxuICAgICAqL1xuICAgIGNvbnRlbnRTbG90PzogQ29udGVudFNsb3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENNU1BhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENNU1BhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnRlbnRTbG90TGlzdH0gW2NvbnRlbnRTbG90c11cbiAgICAgKi9cbiAgICBjb250ZW50U2xvdHM/OiBDb250ZW50U2xvdExpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlZmF1bHRQYWdlXVxuICAgICAqL1xuICAgIGRlZmF1bHRQYWdlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGVtcGxhdGVdXG4gICAgICovXG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVdXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHlwZUNvZGVdXG4gICAgICovXG4gICAgdHlwZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcmRUeXBlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJkVHlwZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcmRUeXBlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FyZFR5cGVMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJkVHlwZVtdfSBbY2FyZFR5cGVzXVxuICAgICAqL1xuICAgIGNhcmRUeXBlcz86IENhcmRUeXBlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYXltZW50VHlwZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudFR5cGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5TmFtZV1cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBheW1lbnRUeXBlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGF5bWVudFR5cGVMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYXltZW50VHlwZVtdfSBbcGF5bWVudFR5cGVzXVxuICAgICAqL1xuICAgIHBheW1lbnRUeXBlcz86IFBheW1lbnRUeXBlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYWRqdXN0ZWRVbml0UHJpY2VdXG4gICAgICovXG4gICAgYWRqdXN0ZWRVbml0UHJpY2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW29yZGVyRW50cnlOdW1iZXJdXG4gICAgICovXG4gICAgb3JkZXJFbnRyeU51bWJlcj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvblJlc3RyaWN0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25SZXN0cmljdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcmVzdHJpY3Rpb25UeXBlXVxuICAgICAqL1xuICAgIHJlc3RyaWN0aW9uVHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119IFtjb3VsZEZpcmVNZXNzYWdlc11cbiAgICAgKi9cbiAgICBjb3VsZEZpcmVNZXNzYWdlcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtlbmFibGVkXVxuICAgICAqL1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtlbmREYXRlXVxuICAgICAqL1xuICAgIGVuZERhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ1tdfSBbZmlyZWRNZXNzYWdlc11cbiAgICAgKi9cbiAgICBmaXJlZE1lc3NhZ2VzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFtwcm9kdWN0QmFubmVyXVxuICAgICAqL1xuICAgIHByb2R1Y3RCYW5uZXI/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwcm9tb3Rpb25Hcm91cF1cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25Hcm91cD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwcm9tb3Rpb25UeXBlXVxuICAgICAqL1xuICAgIHByb21vdGlvblR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdHJpY3Rpb25bXX0gW3Jlc3RyaWN0aW9uc11cbiAgICAgKi9cbiAgICByZXN0cmljdGlvbnM/OiBQcm9tb3Rpb25SZXN0cmljdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtzdGFydERhdGVdXG4gICAgICovXG4gICAgc3RhcnREYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvblJlc3VsdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWRbXX0gW2NvbnN1bWVkRW50cmllc11cbiAgICAgKi9cbiAgICBjb25zdW1lZEVudHJpZXM/OiBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb259IFtwcm9tb3Rpb25dXG4gICAgICovXG4gICAgcHJvbW90aW9uPzogUHJvbW90aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ3VycmVuY3kuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbYWN0aXZlXVxuICAgICAqL1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzeW1ib2xdXG4gICAgICovXG4gICAgc3ltYm9sPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVm91Y2hlci5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFthcHBsaWVkVmFsdWVdXG4gICAgICovXG4gICAgYXBwbGllZFZhbHVlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1cnJlbmN5fSBbY3VycmVuY3ldXG4gICAgICovXG4gICAgY3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZnJlZVNoaXBwaW5nXVxuICAgICAqL1xuICAgIGZyZWVTaGlwcGluZz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlRm9ybWF0dGVkXVxuICAgICAqL1xuICAgIHZhbHVlRm9ybWF0dGVkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlU3RyaW5nXVxuICAgICAqL1xuICAgIHZhbHVlU3RyaW5nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZvdWNoZXJDb2RlXVxuICAgICAqL1xuICAgIHZvdWNoZXJDb2RlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRGVsaXZlcnlNb2RlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeU1vZGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2RlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBHZW9Qb2ludC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgR2VvUG9pbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2xhdGl0dWRlXVxuICAgICAqL1xuICAgIGxhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2xvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBsb25naXR1ZGU/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBUaW1lLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBUaW1lIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWRIb3VyXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZEhvdXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbaG91cl1cbiAgICAgKi9cbiAgICBob3VyPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW21pbnV0ZV1cbiAgICAgKi9cbiAgICBtaW51dGU/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTcGVjaWFsT3BlbmluZ0RheS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3BlY2lhbE9wZW5pbmdEYXkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjbG9zZWRdXG4gICAgICovXG4gICAgY2xvc2VkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbY2xvc2luZ1RpbWVdXG4gICAgICovXG4gICAgY2xvc2luZ1RpbWU/OiBUaW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbW1lbnRdXG4gICAgICovXG4gICAgY29tbWVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGF0ZV1cbiAgICAgKi9cbiAgICBkYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREYXRlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtvcGVuaW5nVGltZV1cbiAgICAgKi9cbiAgICBvcGVuaW5nVGltZT86IFRpbWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBXZWVrZGF5T3BlbmluZ0RheS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgV2Vla2RheU9wZW5pbmdEYXkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjbG9zZWRdXG4gICAgICovXG4gICAgY2xvc2VkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbY2xvc2luZ1RpbWVdXG4gICAgICovXG4gICAgY2xvc2luZ1RpbWU/OiBUaW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtvcGVuaW5nVGltZV1cbiAgICAgKi9cbiAgICBvcGVuaW5nVGltZT86IFRpbWU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbd2Vla0RheV1cbiAgICAgKi9cbiAgICB3ZWVrRGF5Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3BlbmluZ1NjaGVkdWxlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nU2NoZWR1bGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3BlY2lhbE9wZW5pbmdEYXlbXX0gW3NwZWNpYWxEYXlPcGVuaW5nTGlzdF1cbiAgICAgKi9cbiAgICBzcGVjaWFsRGF5T3BlbmluZ0xpc3Q/OiBTcGVjaWFsT3BlbmluZ0RheVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1dlZWtkYXlPcGVuaW5nRGF5W119IFt3ZWVrRGF5T3BlbmluZ0xpc3RdXG4gICAgICovXG4gICAgd2Vla0RheU9wZW5pbmdMaXN0PzogV2Vla2RheU9wZW5pbmdEYXlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBvaW50T2ZTZXJ2aWNlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQb2ludE9mU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2FkZHJlc3NdXG4gICAgICovXG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGlzcGxheU5hbWVdXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGlzdGFuY2VLbV1cbiAgICAgKi9cbiAgICBkaXN0YW5jZUttPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3sgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nIH19IFtmZWF0dXJlc11cbiAgICAgKi9cbiAgICBmZWF0dXJlcz86IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkRGlzdGFuY2VdXG4gICAgICovXG4gICAgZm9ybWF0dGVkRGlzdGFuY2U/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7R2VvUG9pbnR9IFtnZW9Qb2ludF1cbiAgICAgKi9cbiAgICBnZW9Qb2ludD86IEdlb1BvaW50O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbbWFwSWNvbl1cbiAgICAgKi9cbiAgICBtYXBJY29uPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09wZW5pbmdTY2hlZHVsZX0gW29wZW5pbmdIb3Vyc11cbiAgICAgKi9cbiAgICBvcGVuaW5nSG91cnM/OiBPcGVuaW5nU2NoZWR1bGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvcmVDb250ZW50XVxuICAgICAqL1xuICAgIHN0b3JlQ29udGVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVtdfSBbc3RvcmVJbWFnZXNdXG4gICAgICovXG4gICAgc3RvcmVJbWFnZXM/OiBJbWFnZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRlZ29yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFtpbWFnZV1cbiAgICAgKi9cbiAgICBpbWFnZT86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGZWF0dXJlVW5pdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVVuaXQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzeW1ib2xdXG4gICAgICovXG4gICAgc3ltYm9sPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VuaXRUeXBlXVxuICAgICAqL1xuICAgIHVuaXRUeXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmVhdHVyZVZhbHVlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlVmFsdWUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmVhdHVyZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjb21wYXJhYmxlXVxuICAgICAqL1xuICAgIGNvbXBhcmFibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZlYXR1cmVVbml0fSBbZmVhdHVyZVVuaXRdXG4gICAgICovXG4gICAgZmVhdHVyZVVuaXQ/OiBGZWF0dXJlVW5pdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGZWF0dXJlVmFsdWVbXX0gW2ZlYXR1cmVWYWx1ZXNdXG4gICAgICovXG4gICAgZmVhdHVyZVZhbHVlcz86IEZlYXR1cmVWYWx1ZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbcmFuZ2VdXG4gICAgICovXG4gICAgcmFuZ2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVdXG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENsYXNzaWZpY2F0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDbGFzc2lmaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZlYXR1cmVbXX0gW2ZlYXR1cmVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVzPzogRmVhdHVyZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZ1dHVyZVN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGdXR1cmVTdG9jayB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RhdGVdXG4gICAgICovXG4gICAgZGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkRGF0ZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0b2NrfSBbc3RvY2tdXG4gICAgICovXG4gICAgc3RvY2s/OiBTdG9jaztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaWNlUmFuZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByaWNlUmFuZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbbWF4UHJpY2VdXG4gICAgICovXG4gICAgbWF4UHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW21pblByaWNlXVxuICAgICAqL1xuICAgIG1pblByaWNlPzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0UmVmZXJlbmNlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0UmVmZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbcHJlc2VsZWN0ZWRdXG4gICAgICovXG4gICAgcHJlc2VsZWN0ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JlZmVyZW5jZVR5cGVdXG4gICAgICovXG4gICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0fSBbdGFyZ2V0XVxuICAgICAqL1xuICAgIHRhcmdldD86IFByb2R1Y3Q7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBMYW5ndWFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthY3RpdmVdXG4gICAgICovXG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hdGl2ZU5hbWVdXG4gICAgICovXG4gICAgbmF0aXZlTmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1cnJlbmN5fSBbY3VycmVuY3ldXG4gICAgICovXG4gICAgY3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjdXN0b21lcklkXVxuICAgICAqL1xuICAgIGN1c3RvbWVySWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RlYWN0aXZhdGlvbkRhdGVdXG4gICAgICovXG4gICAgZGVhY3RpdmF0aW9uRGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlZmF1bHRBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlZmF1bHRBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5VWlkXVxuICAgICAqL1xuICAgIGRpc3BsYXlVaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmlyc3ROYW1lXVxuICAgICAqL1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtMYW5ndWFnZX0gW2xhbmd1YWdlXVxuICAgICAqL1xuICAgIGxhbmd1YWdlPzogTGFuZ3VhZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGFzdE5hbWVdXG4gICAgICovXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlQ29kZV1cbiAgICAgKi9cbiAgICB0aXRsZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJldmlldy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmV2aWV3IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthbGlhc11cbiAgICAgKi9cbiAgICBhbGlhcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb21tZW50XVxuICAgICAqL1xuICAgIGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RhdGVdXG4gICAgICovXG4gICAgZGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaGVhZGxpbmVdXG4gICAgICovXG4gICAgaGVhZGxpbmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VXNlcn0gW3ByaW5jaXBhbF1cbiAgICAgKi9cbiAgICBwcmluY2lwYWw/OiBVc2VyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3JhdGluZ11cbiAgICAgKi9cbiAgICByYXRpbmc/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50Q2F0ZWdvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRDYXRlZ29yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2hhc0ltYWdlXVxuICAgICAqL1xuICAgIGhhc0ltYWdlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50VmFsdWVDYXRlZ29yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudFZhbHVlQ2F0ZWdvcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzZXF1ZW5jZV1cbiAgICAgKi9cbiAgICBzZXF1ZW5jZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50Q2F0ZWdvcnlbXX0gW3N1cGVyQ2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBzdXBlckNhdGVnb3JpZXM/OiBWYXJpYW50Q2F0ZWdvcnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRNYXRyaXhFbGVtZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50TWF0cml4RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE1hdHJpeEVsZW1lbnRbXX0gW2VsZW1lbnRzXVxuICAgICAqL1xuICAgIGVsZW1lbnRzPzogVmFyaWFudE1hdHJpeEVsZW1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbaXNMZWFmXVxuICAgICAqL1xuICAgIGlzTGVhZj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudENhdGVnb3J5fSBbcGFyZW50VmFyaWFudENhdGVnb3J5XVxuICAgICAqL1xuICAgIHBhcmVudFZhcmlhbnRDYXRlZ29yeT86IFZhcmlhbnRDYXRlZ29yeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9ufSBbdmFyaWFudE9wdGlvbl1cbiAgICAgKi9cbiAgICB2YXJpYW50T3B0aW9uPzogVmFyaWFudE9wdGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50VmFsdWVDYXRlZ29yeX0gW3ZhcmlhbnRWYWx1ZUNhdGVnb3J5XVxuICAgICAqL1xuICAgIHZhcmlhbnRWYWx1ZUNhdGVnb3J5PzogVmFyaWFudFZhbHVlQ2F0ZWdvcnk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbYXZhaWxhYmxlRm9yUGlja3VwXVxuICAgICAqL1xuICAgIGF2YWlsYWJsZUZvclBpY2t1cD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYXZlcmFnZVJhdGluZ11cbiAgICAgKi9cbiAgICBhdmVyYWdlUmF0aW5nPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Jhc2VPcHRpb25bXX0gW2Jhc2VPcHRpb25zXVxuICAgICAqL1xuICAgIGJhc2VPcHRpb25zPzogQmFzZU9wdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Jhc2VQcm9kdWN0XVxuICAgICAqL1xuICAgIGJhc2VQcm9kdWN0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhdGVnb3J5W119IFtjYXRlZ29yaWVzXVxuICAgICAqL1xuICAgIGNhdGVnb3JpZXM/OiBDYXRlZ29yeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NsYXNzaWZpY2F0aW9uW119IFtjbGFzc2lmaWNhdGlvbnNdXG4gICAgICovXG4gICAgY2xhc3NpZmljYXRpb25zPzogQ2xhc3NpZmljYXRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RnV0dXJlU3RvY2tbXX0gW2Z1dHVyZVN0b2Nrc11cbiAgICAgKi9cbiAgICBmdXR1cmVTdG9ja3M/OiBGdXR1cmVTdG9ja1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlW119IFtpbWFnZXNdXG4gICAgICovXG4gICAgaW1hZ2VzPzogSW1hZ2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFttYW51ZmFjdHVyZXJdXG4gICAgICovXG4gICAgbWFudWZhY3R1cmVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFttdWx0aWRpbWVuc2lvbmFsXVxuICAgICAqL1xuICAgIG11bHRpZGltZW5zaW9uYWw/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtudW1iZXJPZlJldmlld3NdXG4gICAgICovXG4gICAgbnVtYmVyT2ZSZXZpZXdzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvbltdfSBbcG90ZW50aWFsUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zPzogUHJvbW90aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcmljZV1cbiAgICAgKi9cbiAgICBwcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlUmFuZ2V9IFtwcmljZVJhbmdlXVxuICAgICAqL1xuICAgIHByaWNlUmFuZ2U/OiBQcmljZVJhbmdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RSZWZlcmVuY2VbXX0gW3Byb2R1Y3RSZWZlcmVuY2VzXVxuICAgICAqL1xuICAgIHByb2R1Y3RSZWZlcmVuY2VzPzogUHJvZHVjdFJlZmVyZW5jZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtwdXJjaGFzYWJsZV1cbiAgICAgKi9cbiAgICBwdXJjaGFzYWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmV2aWV3W119IFtyZXZpZXdzXVxuICAgICAqL1xuICAgIHJldmlld3M/OiBSZXZpZXdbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrXVxuICAgICAqL1xuICAgIHN0b2NrPzogU3RvY2s7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3VtbWFyeV1cbiAgICAgKi9cbiAgICBzdW1tYXJ5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE1hdHJpeEVsZW1lbnRbXX0gW3ZhcmlhbnRNYXRyaXhdXG4gICAgICovXG4gICAgdmFyaWFudE1hdHJpeD86IFZhcmlhbnRNYXRyaXhFbGVtZW50W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbltdfSBbdmFyaWFudE9wdGlvbnNdXG4gICAgICovXG4gICAgdmFyaWFudE9wdGlvbnM/OiBWYXJpYW50T3B0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFyaWFudFR5cGVdXG4gICAgICovXG4gICAgdmFyaWFudFR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2VbXX0gW3ZvbHVtZVByaWNlc11cbiAgICAgKi9cbiAgICB2b2x1bWVQcmljZXM/OiBQcmljZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt2b2x1bWVQcmljZXNGbGFnXVxuICAgICAqL1xuICAgIHZvbHVtZVByaWNlc0ZsYWc/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJFbnRyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJFbnRyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtiYXNlUHJpY2VdXG4gICAgICovXG4gICAgYmFzZVByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZX0gW2RlbGl2ZXJ5UG9pbnRPZlNlcnZpY2VdXG4gICAgICovXG4gICAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2VudHJ5TnVtYmVyXVxuICAgICAqL1xuICAgIGVudHJ5TnVtYmVyPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3R9IFtwcm9kdWN0XVxuICAgICAqL1xuICAgIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3VwZGF0ZWFibGVdXG4gICAgICovXG4gICAgdXBkYXRlYWJsZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBEZWxpdmVyeU9yZGVyRW50cnlHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlPcmRlckVudHJ5R3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWxpdmVyeUFkZHJlc3NdXG4gICAgICovXG4gICAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudERldGFpbHMuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnREZXRhaWxzIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthY2NvdW50SG9sZGVyTmFtZV1cbiAgICAgKi9cbiAgICBhY2NvdW50SG9sZGVyTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYmlsbGluZ0FkZHJlc3NdXG4gICAgICovXG4gICAgYmlsbGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhcmROdW1iZXJdXG4gICAgICovXG4gICAgY2FyZE51bWJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJkVHlwZX0gW2NhcmRUeXBlXVxuICAgICAqL1xuICAgIGNhcmRUeXBlPzogQ2FyZFR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3ZuXVxuICAgICAqL1xuICAgIGN2bj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZGVmYXVsdFBheW1lbnRdXG4gICAgICovXG4gICAgZGVmYXVsdFBheW1lbnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2V4cGlyeU1vbnRoXVxuICAgICAqL1xuICAgIGV4cGlyeU1vbnRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2V4cGlyeVllYXJdXG4gICAgICovXG4gICAgZXhwaXJ5WWVhcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc3N1ZU51bWJlcl1cbiAgICAgKi9cbiAgICBpc3N1ZU51bWJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2F2ZWRdXG4gICAgICovXG4gICAgc2F2ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXJ0TW9udGhdXG4gICAgICovXG4gICAgc3RhcnRNb250aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGFydFllYXJdXG4gICAgICovXG4gICAgc3RhcnRZZWFyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1YnNjcmlwdGlvbklkXVxuICAgICAqL1xuICAgIHN1YnNjcmlwdGlvbklkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGlja3VwT3JkZXJFbnRyeUdyb3VwLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQaWNrdXBPcmRlckVudHJ5R3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlfSBbZGVsaXZlcnlQb2ludE9mU2VydmljZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGlzdGFuY2VdXG4gICAgICovXG4gICAgZGlzdGFuY2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaW5jaXBhbC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpbmNpcGFsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZE9yZGVyUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkUHJvZHVjdFByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Vm91Y2hlcltdfSBbYXBwbGllZFZvdWNoZXJzXVxuICAgICAqL1xuICAgIGFwcGxpZWRWb3VjaGVycz86IFZvdWNoZXJbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2FsY3VsYXRlZF1cbiAgICAgKi9cbiAgICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlbGl2ZXJ5QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2RlbGl2ZXJ5SXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdfSBbZGVsaXZlcnlPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2V4cGlyYXRpb25UaW1lXVxuICAgICAqL1xuICAgIGV4cGlyYXRpb25UaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtndWlkXVxuICAgICAqL1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtuZXRdXG4gICAgICovXG4gICAgbmV0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW29yZGVyRGlzY291bnRzXVxuICAgICAqL1xuICAgIG9yZGVyRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudERldGFpbHN9IFtwYXltZW50SW5mb11cbiAgICAgKi9cbiAgICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BpY2t1cEl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgcGlja3VwSXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQaWNrdXBPcmRlckVudHJ5R3JvdXBbXX0gW3BpY2t1cE9yZGVyR3JvdXBzXVxuICAgICAqL1xuICAgIHBpY2t1cE9yZGVyR3JvdXBzPzogUGlja3VwT3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwb3RlbnRpYWxPcmRlclByb21vdGlvbnNdXG4gICAgICovXG4gICAgcG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcHJvZHVjdERpc2NvdW50c11cbiAgICAgKi9cbiAgICBwcm9kdWN0RGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3NhdmVUaW1lXVxuICAgICAqL1xuICAgIHNhdmVUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFtzYXZlZEJ5XVxuICAgICAqL1xuICAgIHNhdmVkQnk/OiBQcmluY2lwYWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2l0ZV1cbiAgICAgKi9cbiAgICBzaXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlXVxuICAgICAqL1xuICAgIHN0b3JlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbc3ViVG90YWxdXG4gICAgICovXG4gICAgc3ViVG90YWw/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsRGlzY291bnRzXVxuICAgICAqL1xuICAgIHRvdGFsRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxJdGVtc11cbiAgICAgKi9cbiAgICB0b3RhbEl0ZW1zPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxUYXhdXG4gICAgICovXG4gICAgdG90YWxUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFVuaXRDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFVuaXRDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFt1c2VyXVxuICAgICAqL1xuICAgIHVzZXI/OiBQcmluY2lwYWw7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJ0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FydExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcnRbXX0gW2NhcnRzXVxuICAgICAqL1xuICAgIGNhcnRzPzogQ2FydFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FydE1vZGlmaWNhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FydE1vZGlmaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlbGl2ZXJ5TW9kZUNoYW5nZWRdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2RlQ2hhbmdlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeX0gW2VudHJ5XVxuICAgICAqL1xuICAgIGVudHJ5PzogT3JkZXJFbnRyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eUFkZGVkXVxuICAgICAqL1xuICAgIHF1YW50aXR5QWRkZWQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzQ29kZV1cbiAgICAgKi9cbiAgICBzdGF0dXNDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c01lc3NhZ2VdXG4gICAgICovXG4gICAgc3RhdHVzTWVzc2FnZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGVnb3J5SGllcmFyY2h5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUhpZXJhcmNoeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeUhpZXJhcmNoeVtdfSBbc3ViY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBzdWJjYXRlZ29yaWVzPzogQ2F0ZWdvcnlIaWVyYXJjaHlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZ1ZlcnNpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGFsb2dWZXJzaW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeUhpZXJhcmNoeVtdfSBbY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlIaWVyYXJjaHlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbbGFzdE1vZGlmaWVkXVxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRhbG9nLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRhbG9nVmVyc2lvbltdfSBbY2F0YWxvZ1ZlcnNpb25zXVxuICAgICAqL1xuICAgIGNhdGFsb2dWZXJzaW9ucz86IENhdGFsb2dWZXJzaW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZ0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGFsb2dMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRhbG9nW119IFtjYXRhbG9nc11cbiAgICAgKi9cbiAgICBjYXRhbG9ncz86IENhdGFsb2dbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbXBvbmVudElETGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50SURMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX0gW2lkTGlzdF1cbiAgICAgKi9cbiAgICBpZExpc3Q/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnNpZ25tZW50RW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50RW50cnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnl9IFtvcmRlckVudHJ5XVxuICAgICAqL1xuICAgIG9yZGVyRW50cnk/OiBPcmRlckVudHJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NoaXBwZWRRdWFudGl0eV1cbiAgICAgKi9cbiAgICBzaGlwcGVkUXVhbnRpdHk/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb25zaWdubWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2lnbm1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZX0gW2RlbGl2ZXJ5UG9pbnRPZlNlcnZpY2VdXG4gICAgICovXG4gICAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnNpZ25tZW50RW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IENvbnNpZ25tZW50RW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbc2hpcHBpbmdBZGRyZXNzXVxuICAgICAqL1xuICAgIHNoaXBwaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbc3RhdHVzRGF0ZV1cbiAgICAgKi9cbiAgICBzdGF0dXNEYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0cmFja2luZ0lEXVxuICAgICAqL1xuICAgIHRyYWNraW5nSUQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb3VudHJ5TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvdW50cnlbXX0gW2NvdW50cmllc11cbiAgICAgKi9cbiAgICBjb3VudHJpZXM/OiBDb3VudHJ5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDdXJyZW5jeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q3VycmVuY3lbXX0gW2N1cnJlbmNpZXNdXG4gICAgICovXG4gICAgY3VycmVuY2llcz86IEN1cnJlbmN5W107XG4gIH1cblxuICAvKipcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDdXN0b21lckNvdXBvblxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckNvdXBvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY291cG9uSWRdXG4gICAgICovXG4gICAgY291cG9uSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXJ0RGF0ZV1cbiAgICAgKi9cbiAgICBzdGFydERhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZW5kRGF0ZV1cbiAgICAgKi9cbiAgICBlbmREYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2VuZERhdGVdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtub3RpZmljYXRpb25Pbl1cbiAgICAgKi9cbiAgICBub3RpZmljYXRpb25Pbj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FsbFByb2R1Y3RzQXBwbGljYWJsZV1cbiAgICAgKi9cbiAgICBhbGxQcm9kdWN0c0FwcGxpY2FibGU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHRcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ3VzdG9tZXJDb3Vwb25TZWFyY2hSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1c3RvbWVyQ291cG9uW119IFtjb3Vwb25zXVxuICAgICAqL1xuICAgIGNvdXBvbnM/OiBDdXN0b21lckNvdXBvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb259IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRGVsaXZlcnlNb2RlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlNb2RlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlW119IFtkZWxpdmVyeU1vZGVzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZXM/OiBEZWxpdmVyeU1vZGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZhY2V0VmFsdWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZhY2V0VmFsdWUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2NvdW50XVxuICAgICAqL1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW3F1ZXJ5XVxuICAgICAqL1xuICAgIHF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZhY2V0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGYWNldCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NhdGVnb3J5XVxuICAgICAqL1xuICAgIGNhdGVnb3J5PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbXVsdGlTZWxlY3RdXG4gICAgICovXG4gICAgbXVsdGlTZWxlY3Q/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGYWNldFZhbHVlW119IFt0b3BWYWx1ZXNdXG4gICAgICovXG4gICAgdG9wVmFsdWVzPzogRmFjZXRWYWx1ZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZhY2V0VmFsdWVbXX0gW3ZhbHVlc11cbiAgICAgKi9cbiAgICB2YWx1ZXM/OiBGYWNldFZhbHVlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3Zpc2libGVdXG4gICAgICovXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBMYW5ndWFnZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TGFuZ3VhZ2VbXX0gW2xhbmd1YWdlc11cbiAgICAgKi9cbiAgICBsYW5ndWFnZXM/OiBMYW5ndWFnZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGFnaW5hdGlvbi5cbiAgICogUGFnaW5hdGlvbiBpbmZvXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2NvdW50XSBOdW1iZXIgb2YgZWxlbWVudHMgb24gdGhpcyBwYWdlXG4gICAgICovXG4gICAgY291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGFnZV0gQ3VycmVudCBwYWdlIG51bWJlclxuICAgICAqL1xuICAgIHBhZ2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxDb3VudF0gVG90YWwgbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICovXG4gICAgdG90YWxDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VzXSBUb3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICAgKi9cbiAgICB0b3RhbFBhZ2VzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU29ydC5cbiAgICogU29ydCBvcHRpb25cbiAgICpcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FzY11cbiAgICAgKi9cbiAgICBhc2M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIExpc3RBZGFwdGVkQ29tcG9uZW50cy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGlzdEFkYXB0ZWRDb21wb25lbnRzIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnlbXX0gW2NvbXBvbmVudHNdXG4gICAgICovXG4gICAgY29tcG9uZW50cz86IGFueVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb259IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTWVtYmVyTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTWVtYmVyTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsW119IFttZW1iZXJzXVxuICAgICAqL1xuICAgIG1lbWJlcnM/OiBQcmluY2lwYWxbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyRW50cnlMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckVudHJ5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbb3JkZXJFbnRyaWVzXVxuICAgICAqL1xuICAgIG9yZGVyRW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVySGlzdG9yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJIaXN0b3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZ3VpZF1cbiAgICAgKi9cbiAgICBndWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtwbGFjZWRdXG4gICAgICovXG4gICAgcGxhY2VkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsXVxuICAgICAqL1xuICAgIHRvdGFsPzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYWdpbmF0aW9uTW9kZWwuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25Nb2RlbCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbY3VycmVudFBhZ2VdXG4gICAgICovXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGFnZVNpemVdXG4gICAgICovXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc29ydF1cbiAgICAgKi9cbiAgICBzb3J0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUGFnZXNdXG4gICAgICovXG4gICAgdG90YWxQYWdlcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFJlc3VsdHNdXG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU29ydE1vZGVsLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTb3J0TW9kZWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVySGlzdG9yeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVySGlzdG9yeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVySGlzdG9yeVtdfSBbb3JkZXJzXVxuICAgICAqL1xuICAgIG9yZGVycz86IE9yZGVySGlzdG9yeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYmFzZVNpdGVJZF1cbiAgICAgKi9cbiAgICBiYXNlU2l0ZUlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50W119IFtvcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRzXVxuICAgICAqL1xuICAgIG9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudHM/OiBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkT3JkZXJQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIGFwcGxpZWRPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW2FwcGxpZWRQcm9kdWN0UHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWb3VjaGVyW119IFthcHBsaWVkVm91Y2hlcnNdXG4gICAgICovXG4gICAgYXBwbGllZFZvdWNoZXJzPzogVm91Y2hlcltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjYWxjdWxhdGVkXVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb25zaWdubWVudFtdfSBbY29uc2lnbm1lbnRzXVxuICAgICAqL1xuICAgIGNvbnNpZ25tZW50cz86IENvbnNpZ25tZW50W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2NyZWF0ZWRdXG4gICAgICovXG4gICAgY3JlYXRlZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlbGl2ZXJ5QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2RlbGl2ZXJ5SXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdfSBbZGVsaXZlcnlPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWxpdmVyeVN0YXR1c11cbiAgICAgKi9cbiAgICBkZWxpdmVyeVN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWxpdmVyeVN0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgZGVsaXZlcnlTdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZ3Vlc3RDdXN0b21lcl1cbiAgICAgKi9cbiAgICBndWVzdEN1c3RvbWVyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtndWlkXVxuICAgICAqL1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW25ldF1cbiAgICAgKi9cbiAgICBuZXQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbb3JkZXJEaXNjb3VudHNdXG4gICAgICovXG4gICAgb3JkZXJEaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYXltZW50RGV0YWlsc30gW3BheW1lbnRJbmZvXVxuICAgICAqL1xuICAgIHBheW1lbnRJbmZvPzogUGF5bWVudERldGFpbHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGlja3VwSXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BpY2t1cE9yZGVyRW50cnlHcm91cFtdfSBbcGlja3VwT3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgcGlja3VwT3JkZXJHcm91cHM/OiBQaWNrdXBPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3Byb2R1Y3REaXNjb3VudHNdXG4gICAgICovXG4gICAgcHJvZHVjdERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3NpdGVdXG4gICAgICovXG4gICAgc2l0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZV1cbiAgICAgKi9cbiAgICBzdG9yZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3N1YlRvdGFsXVxuICAgICAqL1xuICAgIHN1YlRvdGFsPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbERpc2NvdW50c11cbiAgICAgKi9cbiAgICB0b3RhbERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsSXRlbXNdXG4gICAgICovXG4gICAgdG90YWxJdGVtcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsVGF4XVxuICAgICAqL1xuICAgIHRvdGFsVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbdW5jb25zaWduZWRFbnRyaWVzXVxuICAgICAqL1xuICAgIHVuY29uc2lnbmVkRW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFt1c2VyXVxuICAgICAqL1xuICAgIHVzZXI/OiBQcmluY2lwYWw7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXR1cm5SZXF1ZXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXR1cm5SZXF1ZXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2FuY2VsbGFibGVdXG4gICAgICovXG4gICAgY2FuY2VsbGFibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbY3JlYXRpb25UaW1lXVxuICAgICAqL1xuICAgIGNyZWF0aW9uVGltZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtkZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7b3JkZXJ9IFtvcmRlcl1cbiAgICAgKi9cbiAgICBvcmRlcj86IE9yZGVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtyZWZ1bmREZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgcmVmdW5kRGVsaXZlcnlDb3N0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZXR1cm5SZXF1ZXN0RW50cnlbXX0gW3JldHVybkVudHJpZXNdXG4gICAgICovXG4gICAgcmV0dXJuRW50cmllcz86IFJldHVyblJlcXVlc3RFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JldHVybkxhYmVsRG93bmxvYWRVcmxdXG4gICAgICovXG4gICAgcmV0dXJuTGFiZWxEb3dubG9hZFVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtybWFdXG4gICAgICovXG4gICAgcm1hPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c11cbiAgICAgKi9cbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtzdWJUb3RhbF1cbiAgICAgKi9cbiAgICBzdWJUb3RhbD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXR1cm5SZXF1ZXN0RW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJldHVyblJlcXVlc3RFbnRyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeX0gW29yZGVyRW50cnldXG4gICAgICovXG4gICAgb3JkZXJFbnRyeT86IE9yZGVyRW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZXhwZWN0ZWRRdWFudGl0eV1cbiAgICAgKi9cbiAgICBleHBlY3RlZFF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcmVmdW5kQW1vdW50XVxuICAgICAqL1xuICAgIHJlZnVuZEFtb3VudD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudERldGFpbHNMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYXltZW50RGV0YWlsc0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BheW1lbnREZXRhaWxzW119IFtwYXltZW50c11cbiAgICAgKi9cbiAgICBwYXltZW50cz86IFBheW1lbnREZXRhaWxzW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQb2ludE9mU2VydmljZVN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQb2ludE9mU2VydmljZVN0b2NrIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYWRkcmVzc11cbiAgICAgKi9cbiAgICBhZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5TmFtZV1cbiAgICAgKi9cbiAgICBkaXNwbGF5TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkaXN0YW5jZUttXVxuICAgICAqL1xuICAgIGRpc3RhbmNlS20/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7eyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfX0gW2ZlYXR1cmVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVzPzogeyBbcHJvcGVydHlOYW1lOiBzdHJpbmddOiBzdHJpbmcgfTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREaXN0YW5jZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREaXN0YW5jZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtHZW9Qb2ludH0gW2dlb1BvaW50XVxuICAgICAqL1xuICAgIGdlb1BvaW50PzogR2VvUG9pbnQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFttYXBJY29uXVxuICAgICAqL1xuICAgIG1hcEljb24/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3BlbmluZ1NjaGVkdWxlfSBbb3BlbmluZ0hvdXJzXVxuICAgICAqL1xuICAgIG9wZW5pbmdIb3Vycz86IE9wZW5pbmdTY2hlZHVsZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrSW5mb11cbiAgICAgKi9cbiAgICBzdG9ja0luZm8/OiBTdG9jaztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZUNvbnRlbnRdXG4gICAgICovXG4gICAgc3RvcmVDb250ZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlW119IFtzdG9yZUltYWdlc11cbiAgICAgKi9cbiAgICBzdG9yZUltYWdlcz86IEltYWdlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXRhbG9nSWRdXG4gICAgICovXG4gICAgY2F0YWxvZ0lkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2dWZXJzaW9uXVxuICAgICAqL1xuICAgIGNhdGFsb2dWZXJzaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudFtdfSBbcHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50c11cbiAgICAgKi9cbiAgICBwcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRzPzogUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2ddXG4gICAgICovXG4gICAgY2F0YWxvZz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjdXJyZW50UGFnZV1cbiAgICAgKi9cbiAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0W119IFtwcm9kdWN0c11cbiAgICAgKi9cbiAgICBwcm9kdWN0cz86IFByb2R1Y3RbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFBhZ2VDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFByb2R1Y3RDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFByb2R1Y3RDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2ZXJzaW9uXVxuICAgICAqL1xuICAgIHZlcnNpb24/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0UmVmZXJlbmNlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RSZWZlcmVuY2VbXX0gW3JlZmVyZW5jZXNdXG4gICAgICovXG4gICAgcmVmZXJlbmNlcz86IFByb2R1Y3RSZWZlcmVuY2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNwZWxsaW5nU3VnZ2VzdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3BlbGxpbmdTdWdnZXN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtxdWVyeV1cbiAgICAgKi9cbiAgICBxdWVyeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWdnZXN0aW9uXVxuICAgICAqL1xuICAgIHN1Z2dlc3Rpb24/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0U2VhcmNoUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFNlYXJjaFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0JyZWFkY3J1bWJbXX0gW2JyZWFkY3J1bWJzXVxuICAgICAqL1xuICAgIGJyZWFkY3J1bWJzPzogQnJlYWRjcnVtYltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGVnb3J5Q29kZV1cbiAgICAgKi9cbiAgICBjYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFtjdXJyZW50UXVlcnldXG4gICAgICovXG4gICAgY3VycmVudFF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmFjZXRbXX0gW2ZhY2V0c11cbiAgICAgKi9cbiAgICBmYWNldHM/OiBGYWNldFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZyZWVUZXh0U2VhcmNoXVxuICAgICAqL1xuICAgIGZyZWVUZXh0U2VhcmNoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2tleXdvcmRSZWRpcmVjdFVybF1cbiAgICAgKi9cbiAgICBrZXl3b3JkUmVkaXJlY3RVcmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RbXX0gW3Byb2R1Y3RzXVxuICAgICAqL1xuICAgIHByb2R1Y3RzPzogUHJvZHVjdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTcGVsbGluZ1N1Z2dlc3Rpb259IFtzcGVsbGluZ1N1Z2dlc3Rpb25dXG4gICAgICovXG4gICAgc3BlbGxpbmdTdWdnZXN0aW9uPzogU3BlbGxpbmdTdWdnZXN0aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uW119IFtwcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHByb21vdGlvbnM/OiBQcm9tb3Rpb25bXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvblJlc3VsdExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvblJlc3VsdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbcHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXZpZXdMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBSZXZpZXdMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZXZpZXdbXX0gW3Jldmlld3NdXG4gICAgICovXG4gICAgcmV2aWV3cz86IFJldmlld1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU2F2ZUNhcnRSZXN1bHQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNhdmVDYXJ0UmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJ0fSBbc2F2ZWRDYXJ0RGF0YV1cbiAgICAgKi9cbiAgICBzYXZlZENhcnREYXRhPzogQ2FydDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b3JlRmluZGVyU2VhcmNoUGFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3RvcmVGaW5kZXJTZWFyY2hQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZEVhc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRFYXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kTm9ydGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZE5vcnRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRTb3V0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kU291dGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFdlc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRXZXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xvY2F0aW9uVGV4dF1cbiAgICAgKi9cbiAgICBsb2NhdGlvblRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMb25naXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlW119IFtzdG9yZXNdXG4gICAgICovXG4gICAgc3RvcmVzPzogUG9pbnRPZlNlcnZpY2VbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b3JlRmluZGVyU3RvY2tTZWFyY2hQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUZpbmRlclN0b2NrU2VhcmNoUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRFYXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kRWFzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZE5vcnRoTGF0aXR1ZGVdXG4gICAgICovXG4gICAgYm91bmROb3J0aExhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kU291dGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZFNvdXRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRXZXN0TG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kV2VzdExvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsb2NhdGlvblRleHRdXG4gICAgICovXG4gICAgbG9jYXRpb25UZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0fSBbcHJvZHVjdF1cbiAgICAgKi9cbiAgICBwcm9kdWN0PzogUHJvZHVjdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTGF0aXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc291cmNlTG9uZ2l0dWRlXVxuICAgICAqL1xuICAgIHNvdXJjZUxvbmdpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZVN0b2NrW119IFtzdG9yZXNdXG4gICAgICovXG4gICAgc3RvcmVzPzogUG9pbnRPZlNlcnZpY2VTdG9ja1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3VnZ2VzdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdWdnZXN0aW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3VnZ2VzdGlvbkxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N1Z2dlc3Rpb25bXX0gW3N1Z2dlc3Rpb25zXVxuICAgICAqL1xuICAgIHN1Z2dlc3Rpb25zPzogU3VnZ2VzdGlvbltdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGl0bGUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRpdGxlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGl0bGVMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBUaXRsZUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpdGxlW119IFt0aXRsZXNdXG4gICAgICovXG4gICAgdGl0bGVzPzogVGl0bGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXJHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXNlckdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWxbXX0gW21lbWJlcnNdXG4gICAgICovXG4gICAgbWVtYmVycz86IFByaW5jaXBhbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW21lbWJlcnNDb3VudF1cbiAgICAgKi9cbiAgICBtZW1iZXJzQ291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1VzZXJHcm91cFtdfSBbc3ViR3JvdXBzXVxuICAgICAqL1xuICAgIHN1Ykdyb3Vwcz86IFVzZXJHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFN0b3JlQ291bnQge1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIGlzb0NvZGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUNvdW50TGlzdCB7XG4gICAgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQ/OiBTdG9yZUNvdW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWb3VjaGVyTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZvdWNoZXJbXX0gW3ZvdWNoZXJzXVxuICAgICAqL1xuICAgIHZvdWNoZXJzPzogVm91Y2hlcltdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBQcmljZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQlVZJywgJ0ZST00nXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IFByaWNlVHlwZSA9IDxQcmljZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBQcmljZVR5cGUge1xuICAgIEJVWSA9ICdCVVknLFxuICAgIEZST00gPSAnRlJPTScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEltYWdlVHlwZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdQUklNQVJZJywgJ0dBTExFUlknXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEltYWdlVHlwZSA9IDxJbWFnZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBJbWFnZVR5cGUge1xuICAgIFBSSU1BUlkgPSAnUFJJTUFSWScsXG4gICAgR0FMTEVSWSA9ICdHQUxMRVJZJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzID0gPEZpZWxkcz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkcyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEgPSA8RmllbGRzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyID0gPEZpZWxkczI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMyA9IDxGaWVsZHMzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQgPSA8RmllbGRzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1ID0gPEZpZWxkczU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNiA9IDxGaWVsZHM2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgUGFnZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQ29udGVudFBhZ2UnLCAnUHJvZHVjdFBhZ2UnLCAnQ2F0ZWdvcnlQYWdlJyxcbiAgICogJ0NhdGFsb2dQYWdlJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBQYWdlVHlwZSA9IDxQYWdlVHlwZT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFBhZ2VUeXBlIHtcbiAgICBDT05URU5UX1BBR0UgPSAnQ29udGVudFBhZ2UnLFxuICAgIFBST0RVQ1RfUEFHRSA9ICdQcm9kdWN0UGFnZScsXG4gICAgQ0FURUdPUllfUEFHRSA9ICdDYXRlZ29yeVBhZ2UnLFxuICAgIENBVEFMT0dfUEFHRSA9ICdDYXRhbG9nUGFnZScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM3ID0gPEZpZWxkczc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzOCA9IDxGaWVsZHM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczkgPSA8RmllbGRzOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTAgPSA8RmllbGRzMTA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxMSA9IDxGaWVsZHMxMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczExIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEyID0gPEZpZWxkczEyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTMgPSA8RmllbGRzMTM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNCA9IDxGaWVsZHMxND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE1ID0gPEZpZWxkczE1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTYgPSA8RmllbGRzMTY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgU29ydEVudW0uXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBTb3J0RW51bSA9IDxTb3J0RW51bT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFNvcnRFbnVtIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE3ID0gPEZpZWxkczE3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTggPSA8RmllbGRzMTg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxOSA9IDxGaWVsZHMxOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIwID0gPEZpZWxkczIwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjEgPSA8RmllbGRzMjE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMiA9IDxGaWVsZHMyMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIzID0gPEZpZWxkczIzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjQgPSA8RmllbGRzMjQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyNSA9IDxGaWVsZHMyNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI2ID0gPEZpZWxkczI2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjcgPSA8RmllbGRzMjc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyOCA9IDxGaWVsZHMyOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI5ID0gPEZpZWxkczI5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzAgPSA8RmllbGRzMzA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzMSA9IDxGaWVsZHMzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMyID0gPEZpZWxkczMyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzMgPSA8RmllbGRzMzM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNCA9IDxGaWVsZHMzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM1ID0gPEZpZWxkczM1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzYgPSA8RmllbGRzMzY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNyA9IDxGaWVsZHMzNz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM4ID0gPEZpZWxkczM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzkgPSA8RmllbGRzMzk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzOSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MCA9IDxGaWVsZHM0MD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0MS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQxID0gPEZpZWxkczQxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDIgPSA8RmllbGRzNDI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MyA9IDxGaWVsZHM0Mz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0NC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ0ID0gPEZpZWxkczQ0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDUgPSA8RmllbGRzNDU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0NSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NiA9IDxGaWVsZHM0Nj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0Ny5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ3ID0gPEZpZWxkczQ3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDggPSA8RmllbGRzNDg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0OCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0OSA9IDxGaWVsZHM0OT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1MC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUwID0gPEZpZWxkczUwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTEgPSA8RmllbGRzNTE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1MSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MiA9IDxGaWVsZHM1Mj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1My5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUzID0gPEZpZWxkczUzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTQgPSA8RmllbGRzNTQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1NSA9IDxGaWVsZHM1NT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1Ni5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU2ID0gPEZpZWxkczU2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTcgPSA8RmllbGRzNTc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1OCA9IDxGaWVsZHM1OD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1OS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU5ID0gPEZpZWxkczU5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczYwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNjAgPSA8RmllbGRzNjA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM2MCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNjEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM2MSA9IDxGaWVsZHM2MT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczYxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ2FsbCcsICdwcm9kdWN0JywgJ29yZGVyJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBUeXBlID0gPFR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBUeXBlIHtcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBQcm9kdWN0ID0gJ3Byb2R1Y3QnLFxuICAgIE9yZGVyID0gJ29yZGVyJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQW5vbnltb3VzQ29uc2VudCB7XG4gICAgdGVtcGxhdGVDb2RlPzogc3RyaW5nO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgY29uc2VudFN0YXRlPzogQ09OU0VOVF9TVEFUVVM7XG4gIH1cblxuICBleHBvcnQgZW51bSBDT05TRU5UX1NUQVRVUyB7XG4gICAgQU5PTllNT1VTX0NPTlNFTlRfR0lWRU4gPSAnR0lWRU4nLFxuICAgIEFOT05ZTU9VU19DT05TRU5UX1dJVEhEUkFXTiA9ICdXSVRIRFJBV04nLFxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50VGVtcGxhdGUge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgdmVyc2lvbj86IG51bWJlcjtcbiAgICBjdXJyZW50Q29uc2VudD86IENvbnNlbnQ7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvbnNlbnQge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY29uc2VudEdpdmVuRGF0ZT86IERhdGU7XG4gICAgY29uc2VudFdpdGhkcmF3bkRhdGU/OiBEYXRlO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50VGVtcGxhdGVMaXN0IHtcbiAgICBjb25zZW50VGVtcGxhdGVzPzogQ29uc2VudFRlbXBsYXRlW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VTaXRlcyB7XG4gICAgYmFzZVNpdGVzPzogQmFzZVNpdGVbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzZVNpdGUge1xuICAgIGNoYW5uZWw/OiBzdHJpbmc7XG4gICAgZGVmYXVsdExhbmd1YWdlPzogTGFuZ3VhZ2U7XG4gICAgZGVmYXVsdFByZXZpZXdDYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gICAgZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZT86IHN0cmluZztcbiAgICBsb2NhbGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB0aGVtZT86IHN0cmluZztcbiAgICB1aWQ/OiBzdHJpbmc7XG4gICAgc3RvcmVzPzogQmFzZVN0b3JlW107XG4gICAgdXJsUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgICB1cmxFbmNvZGluZ0F0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzZVN0b3JlIHtcbiAgICBjdXJyZW5jaWVzPzogQ3VycmVuY3lbXTtcbiAgICBkZWZhdWx0Q3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICBsYW5ndWFnZXM/OiBMYW5ndWFnZVtdO1xuICAgIGRlZmF1bHRMYW5ndWFnZT86IExhbmd1YWdlO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SW50ZXJlc3RFbnRyeSB7XG4gICAgaW50ZXJlc3RUeXBlPzogTm90aWZpY2F0aW9uVHlwZTtcbiAgICBkYXRlQWRkZWQ/OiBzdHJpbmc7XG4gICAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24ge1xuICAgIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICAgIHByb2R1Y3RJbnRlcmVzdEVudHJ5PzogUHJvZHVjdEludGVyZXN0RW50cnlbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IHtcbiAgICByZXN1bHRzPzogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbltdO1xuICAgIHNvcnRzPzogU29ydFtdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uVHlwZSB7XG4gICAgQkFDS19JTl9TVE9DSyA9ICdCQUNLX0lOX1NUT0NLJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0IHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGJ1ZGdldD86IG51bWJlcjtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgZW5kRGF0ZT86IHN0cmluZztcbiAgICBzdGFydERhdGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBvcmdVbml0PzogQjJCVW5pdDtcbiAgICBjb3N0Q2VudGVycz86IENvc3RDZW50ZXJbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQnVkZ2V0c0xpc3Qge1xuICAgIGJ1ZGdldHM/OiBCdWRnZXRbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvc3RDZW50ZXIge1xuICAgIGFjdGl2ZT86IHN0cmluZztcbiAgICBhY3RpdmVGbGFnPzogYm9vbGVhbjtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBvcmlnaW5hbENvZGU/OiBzdHJpbmc7XG4gICAgdW5pdD86IEIyQlVuaXQ7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvc3RDZW50ZXJzTGlzdCB7XG4gICAgY29zdENlbnRlcnM6IENvc3RDZW50ZXJbXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICAvLyBUT0RPKCM4ODc4KTogV2hpY2ggbW9kZWxzIHdlIGNhbiByZW1vdmUgZnJvbSBoZXJlP1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZ1VuaXRVc2VyR3JvdXAge1xuICAgIG1lbWJlcnM/OiBCMkJVc2VyW107XG4gICAgbWVtYmVyc0NvdW4/OiBudW1iZXI7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICBvcmdVbml0PzogQjJCVW5pdDtcbiAgICBwZXJtaXNzaW9ucz86IFBlcm1pc3Npb25bXTtcbiAgICByb2xlcz86IGFueTtcbiAgICBzZWxlY3RlZD86IGJvb2xlYW47XG4gICAgc3ViR3JvdXBzPzogYW55O1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JnVW5pdFVzZXJHcm91cExpc3Qge1xuICAgIG9yZ1VuaXRVc2VyR3JvdXBzOiBPcmdVbml0VXNlckdyb3VwW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCMkJBZGRyZXNzIHtcbiAgICBjZWxscGhvbmU/OiBzdHJpbmc7XG4gICAgY29tcGFueU5hbWU/OiBzdHJpbmc7XG4gICAgY291bnRyeT86IHtcbiAgICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgIH07XG4gICAgZGVmYXVsdEFkZHJlc3M/OiB0cnVlO1xuICAgIGRpc3RyaWN0Pzogc3RyaW5nO1xuICAgIGVtYWlsPzogc3RyaW5nO1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICBmb3JtYXR0ZWRBZGRyZXNzPzogc3RyaW5nO1xuICAgIGlkPzogc3RyaW5nO1xuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIGxpbmUxPzogc3RyaW5nO1xuICAgIGxpbmUyPzogc3RyaW5nO1xuICAgIHBob25lPzogc3RyaW5nO1xuICAgIHBvc3RhbENvZGU/OiBzdHJpbmc7XG4gICAgcmVnaW9uPzoge1xuICAgICAgY291bnRyeUlzbz86IHN0cmluZztcbiAgICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgICBpc29jb2RlU2hvcnQ/OiBzdHJpbmc7XG4gICAgICBuYW1lPzogc3RyaW5nO1xuICAgIH07XG4gICAgc2hpcHBpbmdBZGRyZXNzPzogdHJ1ZTtcbiAgICB0aXRsZT86IHN0cmluZztcbiAgICB0aXRsZUNvZGU/OiBzdHJpbmc7XG4gICAgdG93bj86IHN0cmluZztcbiAgICB2aXNpYmxlSW5BZGRyZXNzQm9vaz86IHRydWU7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEIyQkFkZHJlc3NMaXN0IHtcbiAgICBhZGRyZXNzZXM/OiBCMkJBZGRyZXNzW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEIyQlVuaXROb2RlIHtcbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIGNoaWxkcmVuPzogQjJCVW5pdE5vZGVbXTtcbiAgICBpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHBhcmVudD86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQjJCVW5pdE5vZGVMaXN0IHtcbiAgICB1bml0Tm9kZXM/OiBCMkJVbml0Tm9kZVtdO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBCMkJVc2VyIGV4dGVuZHMgVXNlciB7XG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICBhcHByb3ZlcnM/OiBbXTtcbiAgICBvcmdVbml0PzogQjJCVW5pdDtcbiAgICByb2xlcz86IHN0cmluZ1tdO1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JnVW5pdFVzZXJMaXN0IHtcbiAgICB1c2VyczogQjJCVXNlcltdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQjJCQXBwcm92YWxQcm9jZXNzIHtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEIyQkFwcHJvdmFsUHJvY2Vzc0xpc3Qge1xuICAgIGFwcHJvdmFsUHJvY2Vzc2VzPzogQjJCQXBwcm92YWxQcm9jZXNzW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEIyQlVuaXQge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgYWRkcmVzc2VzPzogQjJCQWRkcmVzc1tdO1xuICAgIHVpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIHBhcmVudE9yZ1VuaXQ/OiBzdHJpbmc7XG4gICAgYXBwcm92YWxQcm9jZXNzPzogQjJCQXBwcm92YWxQcm9jZXNzO1xuICAgIGFkbWluaXN0cmF0b3JzPzogQjJCVXNlcltdO1xuICAgIGFwcHJvdmVycz86IEIyQlVzZXJbXTtcbiAgICBjdXN0b21lcnM/OiBCMkJVc2VyW107XG4gICAgbWFuYWdlcnM/OiBCMkJVc2VyW107XG4gIH1cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGUge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlTGlzdCB7XG4gICAgb3JkZXJBcHByb3ZhbFBlcm1pc3Npb25UeXBlcz86IE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZVtdO1xuICB9XG5cbiAgZXhwb3J0IGVudW0gUGVyaW9kIHtcbiAgICBEQVkgPSAnREFZJyxcbiAgICBXRUVLID0gJ1dFRUsnLFxuICAgIE1PTlRIID0gJ01PTlRIJyxcbiAgICBRVUFSVEVSID0gJ1FVQVJURVInLFxuICAgIFlFQVIgPSAnWUVBUicsXG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFBlcm1pc3Npb24ge1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgY29kZT86IHN0cmluZztcbiAgICBjdXJyZW5jeT86IEN1cnJlbmN5O1xuICAgIG9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZT86IE9yZGVyQXBwcm92YWxQZXJtaXNzaW9uVHlwZTtcbiAgICBvcmdVbml0PzogQjJCVW5pdE5vZGU7XG4gICAgcGVyaW9kUmFuZ2U/OiBQZXJpb2Q7XG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICAgIHRyZXNob2xkPzogbnVtYmVyO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBQZXJtaXNzaW9uc0xpc3Qge1xuICAgIG9yZGVyQXBwcm92YWxQZXJtaXNzaW9ucz86IFBlcm1pc3Npb25bXTtcbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICBleHBvcnQgZW51bSBPcmRlckFwcHJvdmFsRGVjaXNpb25WYWx1ZSB7XG4gICAgQVBQUk9WRSA9ICdBUFBST1ZFJyxcbiAgICBSRUpFQ1QgPSAnUkVKRUNUJyxcbiAgfVxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWxEZWNpc2lvbiB7XG4gICAgZGVjaXNpb24/OiBPcmRlckFwcHJvdmFsRGVjaXNpb25WYWx1ZTtcbiAgICBjb21tZW50Pzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckFwcHJvdmFsUmVjb3JkIHtcbiAgICBhcHByb3Zlcj86IFByaW5jaXBhbDtcbiAgICBjb21tZW50cz86IHN0cmluZztcbiAgICBwZXJtaXNzaW9uVHlwZXM/OiBPcmRlckFwcHJvdmFsUGVybWlzc2lvblR5cGVbXTtcbiAgICBzdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBUcmlnZ2VyIHtcbiAgICBhY3RpdmF0aW9uVGltZT86IHN0cmluZztcbiAgICBkaXNwbGF5VGltZVRhYmxlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckFwcHJvdmFsIHtcbiAgICBhcHByb3ZhbERlY2lzaW9uUmVxdWlyZWQ/OiBib29sZWFuO1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY3VzdG9tZXJPcmRlckFwcHJvdmFsUmVjb3Jkcz86IE9yZGVyQXBwcm92YWxSZWNvcmRbXTtcbiAgICBtZXJjaGFudE9yZGVyQXBwcm92YWxSZWNvcmRzPzogT3JkZXJBcHByb3ZhbFJlY29yZFtdO1xuICAgIG9yZGVyPzogT3JkZXI7XG4gICAgdHJpZ2dlcj86IFRyaWdnZXI7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyQXBwcm92YWxzTGlzdCB7XG4gICAgb3JkZXJBcHByb3ZhbHM/OiBPcmRlckFwcHJvdmFsW107XG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICB9XG59XG4iXX0=