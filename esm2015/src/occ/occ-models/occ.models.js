/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export var Occ;
(function (Occ) {
    /**
     *
     * An interface representing Country.
     * @record
     */
    function Country() { }
    Occ.Country = Country;
    if (false) {
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Country.prototype.isocode;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Country.prototype.name;
    }
    /**
     *
     * An interface representing Region.
     * @record
     */
    function Region() { }
    Occ.Region = Region;
    if (false) {
        /**
         * \@member {string} [countryIso]
         * @type {?|undefined}
         */
        Region.prototype.countryIso;
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Region.prototype.isocode;
        /**
         * \@member {string} [isocodeShort]
         * @type {?|undefined}
         */
        Region.prototype.isocodeShort;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Region.prototype.name;
    }
    /**
     *
     * An interface representing RegionList.
     * @record
     */
    function RegionList() { }
    Occ.RegionList = RegionList;
    if (false) {
        /**
         * \@member {Region[]} [regions]
         * @type {?|undefined}
         */
        RegionList.prototype.regions;
    }
    /**
     *
     * An interface representing Address.
     * @record
     */
    function Address() { }
    Occ.Address = Address;
    if (false) {
        /**
         * \@member {string} [companyName]
         * @type {?|undefined}
         */
        Address.prototype.companyName;
        /**
         * \@member {Country} [country]
         * @type {?|undefined}
         */
        Address.prototype.country;
        /**
         * \@member {boolean} [defaultAddress]
         * @type {?|undefined}
         */
        Address.prototype.defaultAddress;
        /**
         * \@member {string} [email]
         * @type {?|undefined}
         */
        Address.prototype.email;
        /**
         * \@member {string} [firstName]
         * @type {?|undefined}
         */
        Address.prototype.firstName;
        /**
         * \@member {string} [formattedAddress]
         * @type {?|undefined}
         */
        Address.prototype.formattedAddress;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        Address.prototype.id;
        /**
         * \@member {string} [lastName]
         * @type {?|undefined}
         */
        Address.prototype.lastName;
        /**
         * \@member {string} [line1]
         * @type {?|undefined}
         */
        Address.prototype.line1;
        /**
         * \@member {string} [line2]
         * @type {?|undefined}
         */
        Address.prototype.line2;
        /**
         * \@member {string} [phone]
         * @type {?|undefined}
         */
        Address.prototype.phone;
        /**
         * \@member {string} [postalCode]
         * @type {?|undefined}
         */
        Address.prototype.postalCode;
        /**
         * \@member {Region} [region]
         * @type {?|undefined}
         */
        Address.prototype.region;
        /**
         * \@member {boolean} [shippingAddress]
         * @type {?|undefined}
         */
        Address.prototype.shippingAddress;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        Address.prototype.title;
        /**
         * \@member {string} [titleCode]
         * @type {?|undefined}
         */
        Address.prototype.titleCode;
        /**
         * \@member {string} [town]
         * @type {?|undefined}
         */
        Address.prototype.town;
        /**
         * \@member {boolean} [visibleInAddressBook]
         * @type {?|undefined}
         */
        Address.prototype.visibleInAddressBook;
    }
    /**
     *
     * An interface representing AddressList.
     * @record
     */
    function AddressList() { }
    Occ.AddressList = AddressList;
    if (false) {
        /**
         * \@member {Address[]} [addresses]
         * @type {?|undefined}
         */
        AddressList.prototype.addresses;
    }
    /**
     *
     * An interface representing ErrorModel.
     * Error message
     *
     * @record
     */
    function ErrorModel() { }
    Occ.ErrorModel = ErrorModel;
    if (false) {
        /**
         * \@member {string} [message] Descriptive, human readable error message.
         * @type {?|undefined}
         */
        ErrorModel.prototype.message;
        /**
         * \@member {string} [reason] Additional classification specific for each
         * error type e.g. 'noStock'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.reason;
        /**
         * \@member {string} [subject] Identifier of the related object e.g. '1'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.subject;
        /**
         * \@member {string} [subjectType] Type of the object related to the error
         * e.g. 'entry'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.subjectType;
        /**
         * \@member {string} [type] Type of the error e.g. 'LowStockError'.
         * @type {?|undefined}
         */
        ErrorModel.prototype.type;
    }
    /**
     *
     * An interface representing ErrorList.
     * List of errors
     *
     * @record
     */
    function ErrorList() { }
    Occ.ErrorList = ErrorList;
    if (false) {
        /**
         * \@member {ErrorModel[]} [errors]
         * @type {?|undefined}
         */
        ErrorList.prototype.errors;
    }
    /**
     *
     * An interface representing AddressValidation.
     * @record
     */
    function AddressValidation() { }
    Occ.AddressValidation = AddressValidation;
    if (false) {
        /**
         * \@member {string} [decision]
         * @type {?|undefined}
         */
        AddressValidation.prototype.decision;
        /**
         * \@member {ErrorList} [errors]
         * @type {?|undefined}
         */
        AddressValidation.prototype.errors;
        /**
         * \@member {Address[]} [suggestedAddresses]
         * @type {?|undefined}
         */
        AddressValidation.prototype.suggestedAddresses;
    }
    /**
     *
     * An interface representing Price.
     * @record
     */
    function Price() { }
    Occ.Price = Price;
    if (false) {
        /**
         * \@member {string} [currencyIso]
         * @type {?|undefined}
         */
        Price.prototype.currencyIso;
        /**
         * \@member {string} [formattedValue]
         * @type {?|undefined}
         */
        Price.prototype.formattedValue;
        /**
         * \@member {number} [maxQuantity]
         * @type {?|undefined}
         */
        Price.prototype.maxQuantity;
        /**
         * \@member {number} [minQuantity]
         * @type {?|undefined}
         */
        Price.prototype.minQuantity;
        /**
         * \@member {PriceType} [priceType] Possible values include: 'BUY', 'FROM'
         * @type {?|undefined}
         */
        Price.prototype.priceType;
        /**
         * \@member {number} [value]
         * @type {?|undefined}
         */
        Price.prototype.value;
    }
    /**
     *
     * An interface representing Stock.
     * @record
     */
    function Stock() { }
    Occ.Stock = Stock;
    if (false) {
        /**
         * \@member {number} [stockLevel]
         * @type {?|undefined}
         */
        Stock.prototype.stockLevel;
        /**
         * \@member {string} [stockLevelStatus]
         * @type {?|undefined}
         */
        Stock.prototype.stockLevelStatus;
    }
    /**
     *
     * An interface representing Image.
     * @record
     */
    function Image() { }
    Occ.Image = Image;
    if (false) {
        /**
         * \@member {string} [altText]
         * @type {?|undefined}
         */
        Image.prototype.altText;
        /**
         * \@member {string} [format]
         * @type {?|undefined}
         */
        Image.prototype.format;
        /**
         * \@member {number} [galleryIndex]
         * @type {?|undefined}
         */
        Image.prototype.galleryIndex;
        /**
         * \@member {ImageType} [imageType] Possible values include: 'PRIMARY',
         * 'GALLERY'
         * @type {?|undefined}
         */
        Image.prototype.imageType;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Image.prototype.url;
    }
    /**
     *
     * An interface representing VariantOptionQualifier.
     * @record
     */
    function VariantOptionQualifier() { }
    Occ.VariantOptionQualifier = VariantOptionQualifier;
    if (false) {
        /**
         * \@member {Image} [image]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.image;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.name;
        /**
         * \@member {string} [qualifier]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.qualifier;
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        VariantOptionQualifier.prototype.value;
    }
    /**
     *
     * An interface representing VariantOption.
     * @record
     */
    function VariantOption() { }
    Occ.VariantOption = VariantOption;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        VariantOption.prototype.code;
        /**
         * \@member {Price} [priceData]
         * @type {?|undefined}
         */
        VariantOption.prototype.priceData;
        /**
         * \@member {Stock} [stock]
         * @type {?|undefined}
         */
        VariantOption.prototype.stock;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        VariantOption.prototype.url;
        /**
         * \@member {VariantOptionQualifier[]} [variantOptionQualifiers]
         * @type {?|undefined}
         */
        VariantOption.prototype.variantOptionQualifiers;
    }
    /**
     *
     * An interface representing BaseOption.
     * @record
     */
    function BaseOption() { }
    Occ.BaseOption = BaseOption;
    if (false) {
        /**
         * \@member {VariantOption[]} [options]
         * @type {?|undefined}
         */
        BaseOption.prototype.options;
        /**
         * \@member {VariantOption} [selected]
         * @type {?|undefined}
         */
        BaseOption.prototype.selected;
        /**
         * \@member {string} [variantType]
         * @type {?|undefined}
         */
        BaseOption.prototype.variantType;
    }
    /**
     *
     * An interface representing SearchQuery.
     * @record
     */
    function SearchQuery() { }
    Occ.SearchQuery = SearchQuery;
    if (false) {
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        SearchQuery.prototype.value;
    }
    /**
     *
     * An interface representing SearchState.
     * @record
     */
    function SearchState() { }
    Occ.SearchState = SearchState;
    if (false) {
        /**
         * \@member {SearchQuery} [query]
         * @type {?|undefined}
         */
        SearchState.prototype.query;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        SearchState.prototype.url;
    }
    /**
     *
     * An interface representing Breadcrumb.
     * @record
     */
    function Breadcrumb() { }
    Occ.Breadcrumb = Breadcrumb;
    if (false) {
        /**
         * \@member {string} [facetCode]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetCode;
        /**
         * \@member {string} [facetName]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetName;
        /**
         * \@member {string} [facetValueCode]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetValueCode;
        /**
         * \@member {string} [facetValueName]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.facetValueName;
        /**
         * \@member {SearchState} [removeQuery]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.removeQuery;
        /**
         * \@member {SearchState} [truncateQuery]
         * @type {?|undefined}
         */
        Breadcrumb.prototype.truncateQuery;
    }
    /**
     *
     * An interface representing Component.
     * @record
     */
    function Component() { }
    Occ.Component = Component;
    if (false) {
        /**
         * \@member {Date} [modifiedTime]
         * @type {?|undefined}
         */
        Component.prototype.modifiedTime;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Component.prototype.name;
        /**
         * \@member {any} [otherProperties]
         * @type {?|undefined}
         */
        Component.prototype.otherProperties;
        /**
         * \@member {string} [typeCode]
         * @type {?|undefined}
         */
        Component.prototype.typeCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        Component.prototype.uid;
    }
    /**
     *
     * An interface representing ComponentList.
     * @record
     */
    function ComponentList() { }
    Occ.ComponentList = ComponentList;
    if (false) {
        /**
         * \@member {Component[]} [component]
         * @type {?|undefined}
         */
        ComponentList.prototype.component;
    }
    /**
     *
     * An interface representing ContentSlot.
     * @record
     */
    function ContentSlot() { }
    Occ.ContentSlot = ContentSlot;
    if (false) {
        /**
         * \@member {ComponentList} [components]
         * @type {?|undefined}
         */
        ContentSlot.prototype.components;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        ContentSlot.prototype.name;
        /**
         * \@member {string} [position]
         * @type {?|undefined}
         */
        ContentSlot.prototype.position;
        /**
         * \@member {string} [slotId]
         * @type {?|undefined}
         */
        ContentSlot.prototype.slotId;
        /**
         * \@member {boolean} [slotShared]
         * @type {?|undefined}
         */
        ContentSlot.prototype.slotShared;
        /**
         * \@member {string} [slotStatus]
         * @type {?|undefined}
         */
        ContentSlot.prototype.slotStatus;
    }
    /**
     *
     * An interface representing ContentSlotList.
     * @record
     */
    function ContentSlotList() { }
    Occ.ContentSlotList = ContentSlotList;
    if (false) {
        /**
         * \@member {ContentSlot[]} [contentSlot]
         * @type {?|undefined}
         */
        ContentSlotList.prototype.contentSlot;
    }
    /**
     *
     * An interface representing CMSPage.
     * @record
     */
    function CMSPage() { }
    Occ.CMSPage = CMSPage;
    if (false) {
        /**
         * \@member {ContentSlotList} [contentSlots]
         * @type {?|undefined}
         */
        CMSPage.prototype.contentSlots;
        /**
         * \@member {boolean} [defaultPage]
         * @type {?|undefined}
         */
        CMSPage.prototype.defaultPage;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CMSPage.prototype.name;
        /**
         * \@member {string} [template]
         * @type {?|undefined}
         */
        CMSPage.prototype.template;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        CMSPage.prototype.title;
        /**
         * \@member {string} [typeCode]
         * @type {?|undefined}
         */
        CMSPage.prototype.typeCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        CMSPage.prototype.uid;
    }
    /**
     *
     * An interface representing CardType.
     * @record
     */
    function CardType() { }
    Occ.CardType = CardType;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        CardType.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CardType.prototype.name;
    }
    /**
     *
     * An interface representing CardTypeList.
     * @record
     */
    function CardTypeList() { }
    Occ.CardTypeList = CardTypeList;
    if (false) {
        /**
         * \@member {CardType[]} [cardTypes]
         * @type {?|undefined}
         */
        CardTypeList.prototype.cardTypes;
    }
    /**
     *
     * An interface representing PromotionOrderEntryConsumed.
     * @record
     */
    function PromotionOrderEntryConsumed() { }
    Occ.PromotionOrderEntryConsumed = PromotionOrderEntryConsumed;
    if (false) {
        /**
         * \@member {number} [adjustedUnitPrice]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.adjustedUnitPrice;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.code;
        /**
         * \@member {number} [orderEntryNumber]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.orderEntryNumber;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        PromotionOrderEntryConsumed.prototype.quantity;
    }
    /**
     *
     * An interface representing PromotionRestriction.
     * @record
     */
    function PromotionRestriction() { }
    Occ.PromotionRestriction = PromotionRestriction;
    if (false) {
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PromotionRestriction.prototype.description;
        /**
         * \@member {string} [restrictionType]
         * @type {?|undefined}
         */
        PromotionRestriction.prototype.restrictionType;
    }
    /**
     *
     * An interface representing Promotion.
     * @record
     */
    function Promotion() { }
    Occ.Promotion = Promotion;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Promotion.prototype.code;
        /**
         * \@member {string[]} [couldFireMessages]
         * @type {?|undefined}
         */
        Promotion.prototype.couldFireMessages;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Promotion.prototype.description;
        /**
         * \@member {boolean} [enabled]
         * @type {?|undefined}
         */
        Promotion.prototype.enabled;
        /**
         * \@member {Date} [endDate]
         * @type {?|undefined}
         */
        Promotion.prototype.endDate;
        /**
         * \@member {string[]} [firedMessages]
         * @type {?|undefined}
         */
        Promotion.prototype.firedMessages;
        /**
         * \@member {number} [priority]
         * @type {?|undefined}
         */
        Promotion.prototype.priority;
        /**
         * \@member {Image} [productBanner]
         * @type {?|undefined}
         */
        Promotion.prototype.productBanner;
        /**
         * \@member {string} [promotionGroup]
         * @type {?|undefined}
         */
        Promotion.prototype.promotionGroup;
        /**
         * \@member {string} [promotionType]
         * @type {?|undefined}
         */
        Promotion.prototype.promotionType;
        /**
         * \@member {PromotionRestriction[]} [restrictions]
         * @type {?|undefined}
         */
        Promotion.prototype.restrictions;
        /**
         * \@member {Date} [startDate]
         * @type {?|undefined}
         */
        Promotion.prototype.startDate;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        Promotion.prototype.title;
    }
    /**
     *
     * An interface representing PromotionResult.
     * @record
     */
    function PromotionResult() { }
    Occ.PromotionResult = PromotionResult;
    if (false) {
        /**
         * \@member {PromotionOrderEntryConsumed[]} [consumedEntries]
         * @type {?|undefined}
         */
        PromotionResult.prototype.consumedEntries;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PromotionResult.prototype.description;
        /**
         * \@member {Promotion} [promotion]
         * @type {?|undefined}
         */
        PromotionResult.prototype.promotion;
    }
    /**
     *
     * An interface representing Currency.
     * @record
     */
    function Currency() { }
    Occ.Currency = Currency;
    if (false) {
        /**
         * \@member {boolean} [active]
         * @type {?|undefined}
         */
        Currency.prototype.active;
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Currency.prototype.isocode;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Currency.prototype.name;
        /**
         * \@member {string} [symbol]
         * @type {?|undefined}
         */
        Currency.prototype.symbol;
    }
    /**
     *
     * An interface representing Voucher.
     * @record
     */
    function Voucher() { }
    Occ.Voucher = Voucher;
    if (false) {
        /**
         * \@member {Price} [appliedValue]
         * @type {?|undefined}
         */
        Voucher.prototype.appliedValue;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Voucher.prototype.code;
        /**
         * \@member {Currency} [currency]
         * @type {?|undefined}
         */
        Voucher.prototype.currency;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Voucher.prototype.description;
        /**
         * \@member {boolean} [freeShipping]
         * @type {?|undefined}
         */
        Voucher.prototype.freeShipping;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Voucher.prototype.name;
        /**
         * \@member {number} [value]
         * @type {?|undefined}
         */
        Voucher.prototype.value;
        /**
         * \@member {string} [valueFormatted]
         * @type {?|undefined}
         */
        Voucher.prototype.valueFormatted;
        /**
         * \@member {string} [valueString]
         * @type {?|undefined}
         */
        Voucher.prototype.valueString;
        /**
         * \@member {string} [voucherCode]
         * @type {?|undefined}
         */
        Voucher.prototype.voucherCode;
    }
    /**
     *
     * An interface representing DeliveryMode.
     * @record
     */
    function DeliveryMode() { }
    Occ.DeliveryMode = DeliveryMode;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.code;
        /**
         * \@member {Price} [deliveryCost]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.deliveryCost;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.description;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        DeliveryMode.prototype.name;
    }
    /**
     *
     * An interface representing GeoPoint.
     * @record
     */
    function GeoPoint() { }
    Occ.GeoPoint = GeoPoint;
    if (false) {
        /**
         * \@member {number} [latitude]
         * @type {?|undefined}
         */
        GeoPoint.prototype.latitude;
        /**
         * \@member {number} [longitude]
         * @type {?|undefined}
         */
        GeoPoint.prototype.longitude;
    }
    /**
     *
     * An interface representing Time.
     * @record
     */
    function Time() { }
    Occ.Time = Time;
    if (false) {
        /**
         * \@member {string} [formattedHour]
         * @type {?|undefined}
         */
        Time.prototype.formattedHour;
        /**
         * \@member {number} [hour]
         * @type {?|undefined}
         */
        Time.prototype.hour;
        /**
         * \@member {number} [minute]
         * @type {?|undefined}
         */
        Time.prototype.minute;
    }
    /**
     *
     * An interface representing SpecialOpeningDay.
     * @record
     */
    function SpecialOpeningDay() { }
    Occ.SpecialOpeningDay = SpecialOpeningDay;
    if (false) {
        /**
         * \@member {boolean} [closed]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.closed;
        /**
         * \@member {Time} [closingTime]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.closingTime;
        /**
         * \@member {string} [comment]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.comment;
        /**
         * \@member {Date} [date]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.date;
        /**
         * \@member {string} [formattedDate]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.formattedDate;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.name;
        /**
         * \@member {Time} [openingTime]
         * @type {?|undefined}
         */
        SpecialOpeningDay.prototype.openingTime;
    }
    /**
     *
     * An interface representing WeekdayOpeningDay.
     * @record
     */
    function WeekdayOpeningDay() { }
    Occ.WeekdayOpeningDay = WeekdayOpeningDay;
    if (false) {
        /**
         * \@member {boolean} [closed]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.closed;
        /**
         * \@member {Time} [closingTime]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.closingTime;
        /**
         * \@member {Time} [openingTime]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.openingTime;
        /**
         * \@member {string} [weekDay]
         * @type {?|undefined}
         */
        WeekdayOpeningDay.prototype.weekDay;
    }
    /**
     *
     * An interface representing OpeningSchedule.
     * @record
     */
    function OpeningSchedule() { }
    Occ.OpeningSchedule = OpeningSchedule;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.name;
        /**
         * \@member {SpecialOpeningDay[]} [specialDayOpeningList]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.specialDayOpeningList;
        /**
         * \@member {WeekdayOpeningDay[]} [weekDayOpeningList]
         * @type {?|undefined}
         */
        OpeningSchedule.prototype.weekDayOpeningList;
    }
    /**
     *
     * An interface representing PointOfService.
     * @record
     */
    function PointOfService() { }
    Occ.PointOfService = PointOfService;
    if (false) {
        /**
         * \@member {Address} [address]
         * @type {?|undefined}
         */
        PointOfService.prototype.address;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PointOfService.prototype.description;
        /**
         * \@member {string} [displayName]
         * @type {?|undefined}
         */
        PointOfService.prototype.displayName;
        /**
         * \@member {number} [distanceKm]
         * @type {?|undefined}
         */
        PointOfService.prototype.distanceKm;
        /**
         * \@member {{ [propertyName: string]: string }} [features]
         * @type {?|undefined}
         */
        PointOfService.prototype.features;
        /**
         * \@member {string} [formattedDistance]
         * @type {?|undefined}
         */
        PointOfService.prototype.formattedDistance;
        /**
         * \@member {GeoPoint} [geoPoint]
         * @type {?|undefined}
         */
        PointOfService.prototype.geoPoint;
        /**
         * \@member {Image} [mapIcon]
         * @type {?|undefined}
         */
        PointOfService.prototype.mapIcon;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        PointOfService.prototype.name;
        /**
         * \@member {OpeningSchedule} [openingHours]
         * @type {?|undefined}
         */
        PointOfService.prototype.openingHours;
        /**
         * \@member {string} [storeContent]
         * @type {?|undefined}
         */
        PointOfService.prototype.storeContent;
        /**
         * \@member {Image[]} [storeImages]
         * @type {?|undefined}
         */
        PointOfService.prototype.storeImages;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        PointOfService.prototype.url;
    }
    /**
     *
     * An interface representing Category.
     * @record
     */
    function Category() { }
    Occ.Category = Category;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Category.prototype.code;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Category.prototype.name;
        /**
         * \@member {Image} [image]
         * @type {?|undefined}
         */
        Category.prototype.image;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Category.prototype.url;
    }
    /**
     *
     * An interface representing FeatureUnit.
     * @record
     */
    function FeatureUnit() { }
    Occ.FeatureUnit = FeatureUnit;
    if (false) {
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        FeatureUnit.prototype.name;
        /**
         * \@member {string} [symbol]
         * @type {?|undefined}
         */
        FeatureUnit.prototype.symbol;
        /**
         * \@member {string} [unitType]
         * @type {?|undefined}
         */
        FeatureUnit.prototype.unitType;
    }
    /**
     *
     * An interface representing FeatureValue.
     * @record
     */
    function FeatureValue() { }
    Occ.FeatureValue = FeatureValue;
    if (false) {
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        FeatureValue.prototype.value;
    }
    /**
     *
     * An interface representing Feature.
     * @record
     */
    function Feature() { }
    Occ.Feature = Feature;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Feature.prototype.code;
        /**
         * \@member {boolean} [comparable]
         * @type {?|undefined}
         */
        Feature.prototype.comparable;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Feature.prototype.description;
        /**
         * \@member {FeatureUnit} [featureUnit]
         * @type {?|undefined}
         */
        Feature.prototype.featureUnit;
        /**
         * \@member {FeatureValue[]} [featureValues]
         * @type {?|undefined}
         */
        Feature.prototype.featureValues;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Feature.prototype.name;
        /**
         * \@member {boolean} [range]
         * @type {?|undefined}
         */
        Feature.prototype.range;
        /**
         * \@member {string} [type]
         * @type {?|undefined}
         */
        Feature.prototype.type;
    }
    /**
     *
     * An interface representing Classification.
     * @record
     */
    function Classification() { }
    Occ.Classification = Classification;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Classification.prototype.code;
        /**
         * \@member {Feature[]} [features]
         * @type {?|undefined}
         */
        Classification.prototype.features;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Classification.prototype.name;
    }
    /**
     *
     * An interface representing FutureStock.
     * @record
     */
    function FutureStock() { }
    Occ.FutureStock = FutureStock;
    if (false) {
        /**
         * \@member {Date} [date]
         * @type {?|undefined}
         */
        FutureStock.prototype.date;
        /**
         * \@member {string} [formattedDate]
         * @type {?|undefined}
         */
        FutureStock.prototype.formattedDate;
        /**
         * \@member {Stock} [stock]
         * @type {?|undefined}
         */
        FutureStock.prototype.stock;
    }
    /**
     *
     * An interface representing PriceRange.
     * @record
     */
    function PriceRange() { }
    Occ.PriceRange = PriceRange;
    if (false) {
        /**
         * \@member {Price} [maxPrice]
         * @type {?|undefined}
         */
        PriceRange.prototype.maxPrice;
        /**
         * \@member {Price} [minPrice]
         * @type {?|undefined}
         */
        PriceRange.prototype.minPrice;
    }
    /**
     *
     * An interface representing ProductReference.
     * @record
     */
    function ProductReference() { }
    Occ.ProductReference = ProductReference;
    if (false) {
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        ProductReference.prototype.description;
        /**
         * \@member {boolean} [preselected]
         * @type {?|undefined}
         */
        ProductReference.prototype.preselected;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        ProductReference.prototype.quantity;
        /**
         * \@member {string} [referenceType]
         * @type {?|undefined}
         */
        ProductReference.prototype.referenceType;
        /**
         * \@member {Product} [target]
         * @type {?|undefined}
         */
        ProductReference.prototype.target;
    }
    /**
     *
     * An interface representing Language.
     * @record
     */
    function Language() { }
    Occ.Language = Language;
    if (false) {
        /**
         * \@member {boolean} [active]
         * @type {?|undefined}
         */
        Language.prototype.active;
        /**
         * \@member {string} [isocode]
         * @type {?|undefined}
         */
        Language.prototype.isocode;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Language.prototype.name;
        /**
         * \@member {string} [nativeName]
         * @type {?|undefined}
         */
        Language.prototype.nativeName;
    }
    /**
     *
     * An interface representing User.
     * @record
     */
    function User() { }
    Occ.User = User;
    if (false) {
        /**
         * \@member {Currency} [currency]
         * @type {?|undefined}
         */
        User.prototype.currency;
        /**
         * \@member {string} [customerId]
         * @type {?|undefined}
         */
        User.prototype.customerId;
        /**
         * \@member {Date} [deactivationDate]
         * @type {?|undefined}
         */
        User.prototype.deactivationDate;
        /**
         * \@member {Address} [defaultAddress]
         * @type {?|undefined}
         */
        User.prototype.defaultAddress;
        /**
         * \@member {string} [displayUid]
         * @type {?|undefined}
         */
        User.prototype.displayUid;
        /**
         * \@member {string} [firstName]
         * @type {?|undefined}
         */
        User.prototype.firstName;
        /**
         * \@member {Language} [language]
         * @type {?|undefined}
         */
        User.prototype.language;
        /**
         * \@member {string} [lastName]
         * @type {?|undefined}
         */
        User.prototype.lastName;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        User.prototype.name;
        /**
         * \@member {string} [title]
         * @type {?|undefined}
         */
        User.prototype.title;
        /**
         * \@member {string} [titleCode]
         * @type {?|undefined}
         */
        User.prototype.titleCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        User.prototype.uid;
    }
    /**
     *
     * An interface representing Review.
     * @record
     */
    function Review() { }
    Occ.Review = Review;
    if (false) {
        /**
         * \@member {string} [alias]
         * @type {?|undefined}
         */
        Review.prototype.alias;
        /**
         * \@member {string} [comment]
         * @type {?|undefined}
         */
        Review.prototype.comment;
        /**
         * \@member {Date} [date]
         * @type {?|undefined}
         */
        Review.prototype.date;
        /**
         * \@member {string} [headline]
         * @type {?|undefined}
         */
        Review.prototype.headline;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        Review.prototype.id;
        /**
         * \@member {User} [principal]
         * @type {?|undefined}
         */
        Review.prototype.principal;
        /**
         * \@member {number} [rating]
         * @type {?|undefined}
         */
        Review.prototype.rating;
    }
    /**
     *
     * An interface representing VariantCategory.
     * @record
     */
    function VariantCategory() { }
    Occ.VariantCategory = VariantCategory;
    if (false) {
        /**
         * \@member {boolean} [hasImage]
         * @type {?|undefined}
         */
        VariantCategory.prototype.hasImage;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        VariantCategory.prototype.name;
        /**
         * \@member {number} [priority]
         * @type {?|undefined}
         */
        VariantCategory.prototype.priority;
    }
    /**
     *
     * An interface representing VariantValueCategory.
     * @record
     */
    function VariantValueCategory() { }
    Occ.VariantValueCategory = VariantValueCategory;
    if (false) {
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        VariantValueCategory.prototype.name;
        /**
         * \@member {number} [sequence]
         * @type {?|undefined}
         */
        VariantValueCategory.prototype.sequence;
        /**
         * \@member {VariantCategory[]} [superCategories]
         * @type {?|undefined}
         */
        VariantValueCategory.prototype.superCategories;
    }
    /**
     *
     * An interface representing VariantMatrixElement.
     * @record
     */
    function VariantMatrixElement() { }
    Occ.VariantMatrixElement = VariantMatrixElement;
    if (false) {
        /**
         * \@member {VariantMatrixElement[]} [elements]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.elements;
        /**
         * \@member {boolean} [isLeaf]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.isLeaf;
        /**
         * \@member {VariantCategory} [parentVariantCategory]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.parentVariantCategory;
        /**
         * \@member {VariantOption} [variantOption]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.variantOption;
        /**
         * \@member {VariantValueCategory} [variantValueCategory]
         * @type {?|undefined}
         */
        VariantMatrixElement.prototype.variantValueCategory;
    }
    /**
     *
     * An interface representing Product.
     * @record
     */
    function Product() { }
    Occ.Product = Product;
    if (false) {
        /**
         * \@member {boolean} [availableForPickup]
         * @type {?|undefined}
         */
        Product.prototype.availableForPickup;
        /**
         * \@member {number} [averageRating]
         * @type {?|undefined}
         */
        Product.prototype.averageRating;
        /**
         * \@member {BaseOption[]} [baseOptions]
         * @type {?|undefined}
         */
        Product.prototype.baseOptions;
        /**
         * \@member {string} [baseProduct]
         * @type {?|undefined}
         */
        Product.prototype.baseProduct;
        /**
         * \@member {Category[]} [categories]
         * @type {?|undefined}
         */
        Product.prototype.categories;
        /**
         * \@member {Classification[]} [classifications]
         * @type {?|undefined}
         */
        Product.prototype.classifications;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Product.prototype.code;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Product.prototype.description;
        /**
         * \@member {FutureStock[]} [futureStocks]
         * @type {?|undefined}
         */
        Product.prototype.futureStocks;
        /**
         * \@member {Image[]} [images]
         * @type {?|undefined}
         */
        Product.prototype.images;
        /**
         * \@member {string} [manufacturer]
         * @type {?|undefined}
         */
        Product.prototype.manufacturer;
        /**
         * \@member {boolean} [multidimensional]
         * @type {?|undefined}
         */
        Product.prototype.multidimensional;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Product.prototype.name;
        /**
         * \@member {number} [numberOfReviews]
         * @type {?|undefined}
         */
        Product.prototype.numberOfReviews;
        /**
         * \@member {Promotion[]} [potentialPromotions]
         * @type {?|undefined}
         */
        Product.prototype.potentialPromotions;
        /**
         * \@member {Price} [price]
         * @type {?|undefined}
         */
        Product.prototype.price;
        /**
         * \@member {PriceRange} [priceRange]
         * @type {?|undefined}
         */
        Product.prototype.priceRange;
        /**
         * \@member {ProductReference[]} [productReferences]
         * @type {?|undefined}
         */
        Product.prototype.productReferences;
        /**
         * \@member {boolean} [purchasable]
         * @type {?|undefined}
         */
        Product.prototype.purchasable;
        /**
         * \@member {Review[]} [reviews]
         * @type {?|undefined}
         */
        Product.prototype.reviews;
        /**
         * \@member {Stock} [stock]
         * @type {?|undefined}
         */
        Product.prototype.stock;
        /**
         * \@member {string} [summary]
         * @type {?|undefined}
         */
        Product.prototype.summary;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Product.prototype.url;
        /**
         * \@member {VariantMatrixElement[]} [variantMatrix]
         * @type {?|undefined}
         */
        Product.prototype.variantMatrix;
        /**
         * \@member {VariantOption[]} [variantOptions]
         * @type {?|undefined}
         */
        Product.prototype.variantOptions;
        /**
         * \@member {string} [variantType]
         * @type {?|undefined}
         */
        Product.prototype.variantType;
        /**
         * \@member {Price[]} [volumePrices]
         * @type {?|undefined}
         */
        Product.prototype.volumePrices;
        /**
         * \@member {boolean} [volumePricesFlag]
         * @type {?|undefined}
         */
        Product.prototype.volumePricesFlag;
    }
    /**
     *
     * An interface representing OrderEntry.
     * @record
     */
    function OrderEntry() { }
    Occ.OrderEntry = OrderEntry;
    if (false) {
        /**
         * \@member {Price} [basePrice]
         * @type {?|undefined}
         */
        OrderEntry.prototype.basePrice;
        /**
         * \@member {DeliveryMode} [deliveryMode]
         * @type {?|undefined}
         */
        OrderEntry.prototype.deliveryMode;
        /**
         * \@member {PointOfService} [deliveryPointOfService]
         * @type {?|undefined}
         */
        OrderEntry.prototype.deliveryPointOfService;
        /**
         * \@member {number} [entryNumber]
         * @type {?|undefined}
         */
        OrderEntry.prototype.entryNumber;
        /**
         * \@member {Product} [product]
         * @type {?|undefined}
         */
        OrderEntry.prototype.product;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        OrderEntry.prototype.quantity;
        /**
         * \@member {Price} [totalPrice]
         * @type {?|undefined}
         */
        OrderEntry.prototype.totalPrice;
        /**
         * \@member {boolean} [updateable]
         * @type {?|undefined}
         */
        OrderEntry.prototype.updateable;
    }
    /**
     *
     * An interface representing DeliveryOrderEntryGroup.
     * @record
     */
    function DeliveryOrderEntryGroup() { }
    Occ.DeliveryOrderEntryGroup = DeliveryOrderEntryGroup;
    if (false) {
        /**
         * \@member {Address} [deliveryAddress]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.deliveryAddress;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.entries;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.quantity;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        DeliveryOrderEntryGroup.prototype.totalPriceWithTax;
    }
    /**
     *
     * An interface representing PaymentDetails.
     * @record
     */
    function PaymentDetails() { }
    Occ.PaymentDetails = PaymentDetails;
    if (false) {
        /**
         * \@member {string} [accountHolderName]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.accountHolderName;
        /**
         * \@member {Address} [billingAddress]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.billingAddress;
        /**
         * \@member {string} [cardNumber]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.cardNumber;
        /**
         * \@member {CardType} [cardType]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.cardType;
        /**
         * \@member {string} [cvn]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.cvn;
        /**
         * \@member {boolean} [defaultPayment]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.defaultPayment;
        /**
         * \@member {string} [expiryMonth]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.expiryMonth;
        /**
         * \@member {string} [expiryYear]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.expiryYear;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.id;
        /**
         * \@member {string} [issueNumber]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.issueNumber;
        /**
         * \@member {boolean} [saved]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.saved;
        /**
         * \@member {string} [startMonth]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.startMonth;
        /**
         * \@member {string} [startYear]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.startYear;
        /**
         * \@member {string} [subscriptionId]
         * @type {?|undefined}
         */
        PaymentDetails.prototype.subscriptionId;
    }
    /**
     *
     * An interface representing PickupOrderEntryGroup.
     * @record
     */
    function PickupOrderEntryGroup() { }
    Occ.PickupOrderEntryGroup = PickupOrderEntryGroup;
    if (false) {
        /**
         * \@member {PointOfService} [deliveryPointOfService]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.deliveryPointOfService;
        /**
         * \@member {number} [distance]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.distance;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.entries;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.quantity;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        PickupOrderEntryGroup.prototype.totalPriceWithTax;
    }
    /**
     *
     * An interface representing Principal.
     * @record
     */
    function Principal() { }
    Occ.Principal = Principal;
    if (false) {
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Principal.prototype.name;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        Principal.prototype.uid;
    }
    /**
     *
     * An interface representing Cart.
     * @record
     */
    function Cart() { }
    Occ.Cart = Cart;
    if (false) {
        /**
         * \@member {PromotionResult[]} [appliedOrderPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.appliedOrderPromotions;
        /**
         * \@member {PromotionResult[]} [appliedProductPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.appliedProductPromotions;
        /**
         * \@member {Voucher[]} [appliedVouchers]
         * @type {?|undefined}
         */
        Cart.prototype.appliedVouchers;
        /**
         * \@member {boolean} [calculated]
         * @type {?|undefined}
         */
        Cart.prototype.calculated;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Cart.prototype.code;
        /**
         * \@member {Address} [deliveryAddress]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryAddress;
        /**
         * \@member {Price} [deliveryCost]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryCost;
        /**
         * \@member {number} [deliveryItemsQuantity]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryItemsQuantity;
        /**
         * \@member {DeliveryMode} [deliveryMode]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryMode;
        /**
         * \@member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
         * @type {?|undefined}
         */
        Cart.prototype.deliveryOrderGroups;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        Cart.prototype.description;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        Cart.prototype.entries;
        /**
         * \@member {Date} [expirationTime]
         * @type {?|undefined}
         */
        Cart.prototype.expirationTime;
        /**
         * \@member {string} [guid]
         * @type {?|undefined}
         */
        Cart.prototype.guid;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Cart.prototype.name;
        /**
         * \@member {boolean} [net]
         * @type {?|undefined}
         */
        Cart.prototype.net;
        /**
         * \@member {Price} [orderDiscounts]
         * @type {?|undefined}
         */
        Cart.prototype.orderDiscounts;
        /**
         * \@member {PaymentDetails} [paymentInfo]
         * @type {?|undefined}
         */
        Cart.prototype.paymentInfo;
        /**
         * \@member {number} [pickupItemsQuantity]
         * @type {?|undefined}
         */
        Cart.prototype.pickupItemsQuantity;
        /**
         * \@member {PickupOrderEntryGroup[]} [pickupOrderGroups]
         * @type {?|undefined}
         */
        Cart.prototype.pickupOrderGroups;
        /**
         * \@member {PromotionResult[]} [potentialOrderPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.potentialOrderPromotions;
        /**
         * \@member {PromotionResult[]} [potentialProductPromotions]
         * @type {?|undefined}
         */
        Cart.prototype.potentialProductPromotions;
        /**
         * \@member {Price} [productDiscounts]
         * @type {?|undefined}
         */
        Cart.prototype.productDiscounts;
        /**
         * \@member {Date} [saveTime]
         * @type {?|undefined}
         */
        Cart.prototype.saveTime;
        /**
         * \@member {Principal} [savedBy]
         * @type {?|undefined}
         */
        Cart.prototype.savedBy;
        /**
         * \@member {string} [site]
         * @type {?|undefined}
         */
        Cart.prototype.site;
        /**
         * \@member {string} [store]
         * @type {?|undefined}
         */
        Cart.prototype.store;
        /**
         * \@member {Price} [subTotal]
         * @type {?|undefined}
         */
        Cart.prototype.subTotal;
        /**
         * \@member {Price} [totalDiscounts]
         * @type {?|undefined}
         */
        Cart.prototype.totalDiscounts;
        /**
         * \@member {number} [totalItems]
         * @type {?|undefined}
         */
        Cart.prototype.totalItems;
        /**
         * \@member {Price} [totalPrice]
         * @type {?|undefined}
         */
        Cart.prototype.totalPrice;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        Cart.prototype.totalPriceWithTax;
        /**
         * \@member {Price} [totalTax]
         * @type {?|undefined}
         */
        Cart.prototype.totalTax;
        /**
         * \@member {number} [totalUnitCount]
         * @type {?|undefined}
         */
        Cart.prototype.totalUnitCount;
        /**
         * \@member {Principal} [user]
         * @type {?|undefined}
         */
        Cart.prototype.user;
    }
    /**
     *
     * An interface representing CartList.
     * @record
     */
    function CartList() { }
    Occ.CartList = CartList;
    if (false) {
        /**
         * \@member {Cart[]} [carts]
         * @type {?|undefined}
         */
        CartList.prototype.carts;
    }
    /**
     *
     * An interface representing CartModification.
     * @record
     */
    function CartModification() { }
    Occ.CartModification = CartModification;
    if (false) {
        /**
         * \@member {boolean} [deliveryModeChanged]
         * @type {?|undefined}
         */
        CartModification.prototype.deliveryModeChanged;
        /**
         * \@member {OrderEntry} [entry]
         * @type {?|undefined}
         */
        CartModification.prototype.entry;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        CartModification.prototype.quantity;
        /**
         * \@member {number} [quantityAdded]
         * @type {?|undefined}
         */
        CartModification.prototype.quantityAdded;
        /**
         * \@member {string} [statusCode]
         * @type {?|undefined}
         */
        CartModification.prototype.statusCode;
        /**
         * \@member {string} [statusMessage]
         * @type {?|undefined}
         */
        CartModification.prototype.statusMessage;
    }
    /**
     *
     * An interface representing CategoryHierarchy.
     * @record
     */
    function CategoryHierarchy() { }
    Occ.CategoryHierarchy = CategoryHierarchy;
    if (false) {
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.id;
        /**
         * \@member {Date} [lastModified]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.lastModified;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.name;
        /**
         * \@member {CategoryHierarchy[]} [subcategories]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.subcategories;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        CategoryHierarchy.prototype.url;
    }
    /**
     *
     * An interface representing CatalogVersion.
     * @record
     */
    function CatalogVersion() { }
    Occ.CatalogVersion = CatalogVersion;
    if (false) {
        /**
         * \@member {CategoryHierarchy[]} [categories]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.categories;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.id;
        /**
         * \@member {Date} [lastModified]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.lastModified;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.name;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        CatalogVersion.prototype.url;
    }
    /**
     *
     * An interface representing Catalog.
     * @record
     */
    function Catalog() { }
    Occ.Catalog = Catalog;
    if (false) {
        /**
         * \@member {CatalogVersion[]} [catalogVersions]
         * @type {?|undefined}
         */
        Catalog.prototype.catalogVersions;
        /**
         * \@member {string} [id]
         * @type {?|undefined}
         */
        Catalog.prototype.id;
        /**
         * \@member {Date} [lastModified]
         * @type {?|undefined}
         */
        Catalog.prototype.lastModified;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Catalog.prototype.name;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        Catalog.prototype.url;
    }
    /**
     *
     * An interface representing CatalogList.
     * @record
     */
    function CatalogList() { }
    Occ.CatalogList = CatalogList;
    if (false) {
        /**
         * \@member {Catalog[]} [catalogs]
         * @type {?|undefined}
         */
        CatalogList.prototype.catalogs;
    }
    /**
     *
     * An interface representing ComponentIDList.
     * @record
     */
    function ComponentIDList() { }
    Occ.ComponentIDList = ComponentIDList;
    if (false) {
        /**
         * \@member {string[]} [idList]
         * @type {?|undefined}
         */
        ComponentIDList.prototype.idList;
    }
    /**
     *
     * An interface representing ConsignmentEntry.
     * @record
     */
    function ConsignmentEntry() { }
    Occ.ConsignmentEntry = ConsignmentEntry;
    if (false) {
        /**
         * \@member {OrderEntry} [orderEntry]
         * @type {?|undefined}
         */
        ConsignmentEntry.prototype.orderEntry;
        /**
         * \@member {number} [quantity]
         * @type {?|undefined}
         */
        ConsignmentEntry.prototype.quantity;
        /**
         * \@member {number} [shippedQuantity]
         * @type {?|undefined}
         */
        ConsignmentEntry.prototype.shippedQuantity;
    }
    /**
     *
     * An interface representing Consignment.
     * @record
     */
    function Consignment() { }
    Occ.Consignment = Consignment;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Consignment.prototype.code;
        /**
         * \@member {PointOfService} [deliveryPointOfService]
         * @type {?|undefined}
         */
        Consignment.prototype.deliveryPointOfService;
        /**
         * \@member {ConsignmentEntry[]} [entries]
         * @type {?|undefined}
         */
        Consignment.prototype.entries;
        /**
         * \@member {Address} [shippingAddress]
         * @type {?|undefined}
         */
        Consignment.prototype.shippingAddress;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        Consignment.prototype.status;
        /**
         * \@member {Date} [statusDate]
         * @type {?|undefined}
         */
        Consignment.prototype.statusDate;
        /**
         * \@member {string} [trackingID]
         * @type {?|undefined}
         */
        Consignment.prototype.trackingID;
    }
    /**
     *
     * An interface representing CountryList.
     * @record
     */
    function CountryList() { }
    Occ.CountryList = CountryList;
    if (false) {
        /**
         * \@member {Country[]} [countries]
         * @type {?|undefined}
         */
        CountryList.prototype.countries;
    }
    /**
     *
     * An interface representing CurrencyList.
     * @record
     */
    function CurrencyList() { }
    Occ.CurrencyList = CurrencyList;
    if (false) {
        /**
         * \@member {Currency[]} [currencies]
         * @type {?|undefined}
         */
        CurrencyList.prototype.currencies;
    }
    /**
     *
     * An interface representing DeliveryModeList.
     * @record
     */
    function DeliveryModeList() { }
    Occ.DeliveryModeList = DeliveryModeList;
    if (false) {
        /**
         * \@member {DeliveryMode[]} [deliveryModes]
         * @type {?|undefined}
         */
        DeliveryModeList.prototype.deliveryModes;
    }
    /**
     *
     * An interface representing FacetValue.
     * @record
     */
    function FacetValue() { }
    Occ.FacetValue = FacetValue;
    if (false) {
        /**
         * \@member {number} [count]
         * @type {?|undefined}
         */
        FacetValue.prototype.count;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        FacetValue.prototype.name;
        /**
         * \@member {SearchState} [query]
         * @type {?|undefined}
         */
        FacetValue.prototype.query;
        /**
         * \@member {boolean} [selected]
         * @type {?|undefined}
         */
        FacetValue.prototype.selected;
    }
    /**
     *
     * An interface representing Facet.
     * @record
     */
    function Facet() { }
    Occ.Facet = Facet;
    if (false) {
        /**
         * \@member {boolean} [category]
         * @type {?|undefined}
         */
        Facet.prototype.category;
        /**
         * \@member {boolean} [multiSelect]
         * @type {?|undefined}
         */
        Facet.prototype.multiSelect;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Facet.prototype.name;
        /**
         * \@member {number} [priority]
         * @type {?|undefined}
         */
        Facet.prototype.priority;
        /**
         * \@member {FacetValue[]} [topValues]
         * @type {?|undefined}
         */
        Facet.prototype.topValues;
        /**
         * \@member {FacetValue[]} [values]
         * @type {?|undefined}
         */
        Facet.prototype.values;
        /**
         * \@member {boolean} [visible]
         * @type {?|undefined}
         */
        Facet.prototype.visible;
    }
    /**
     *
     * An interface representing LanguageList.
     * @record
     */
    function LanguageList() { }
    Occ.LanguageList = LanguageList;
    if (false) {
        /**
         * \@member {Language[]} [languages]
         * @type {?|undefined}
         */
        LanguageList.prototype.languages;
    }
    /**
     *
     * An interface representing Pagination.
     * Pagination info
     *
     * @record
     */
    function Pagination() { }
    Occ.Pagination = Pagination;
    if (false) {
        /**
         * \@member {number} [count] Number of elements on this page
         * @type {?|undefined}
         */
        Pagination.prototype.count;
        /**
         * \@member {number} [page] Current page number
         * @type {?|undefined}
         */
        Pagination.prototype.page;
        /**
         * \@member {number} [totalCount] Total number of elements
         * @type {?|undefined}
         */
        Pagination.prototype.totalCount;
        /**
         * \@member {number} [totalPages] Total number of pages
         * @type {?|undefined}
         */
        Pagination.prototype.totalPages;
    }
    /**
     *
     * An interface representing Sort.
     * Sort option
     *
     * @record
     */
    function Sort() { }
    Occ.Sort = Sort;
    if (false) {
        /**
         * \@member {boolean} [asc]
         * @type {?|undefined}
         */
        Sort.prototype.asc;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Sort.prototype.code;
    }
    /**
     *
     * An interface representing ListAdaptedComponents.
     * @record
     */
    function ListAdaptedComponents() { }
    Occ.ListAdaptedComponents = ListAdaptedComponents;
    if (false) {
        /**
         * \@member {any[]} [components]
         * @type {?|undefined}
         */
        ListAdaptedComponents.prototype.components;
        /**
         * \@member {Pagination} [pagination]
         * @type {?|undefined}
         */
        ListAdaptedComponents.prototype.pagination;
        /**
         * \@member {Sort[]} [sorts]
         * @type {?|undefined}
         */
        ListAdaptedComponents.prototype.sorts;
    }
    /**
     *
     * An interface representing MemberList.
     * @record
     */
    function MemberList() { }
    Occ.MemberList = MemberList;
    if (false) {
        /**
         * \@member {Principal[]} [members]
         * @type {?|undefined}
         */
        MemberList.prototype.members;
    }
    /**
     *
     * An interface representing OrderEntryList.
     * @record
     */
    function OrderEntryList() { }
    Occ.OrderEntryList = OrderEntryList;
    if (false) {
        /**
         * \@member {OrderEntry[]} [orderEntries]
         * @type {?|undefined}
         */
        OrderEntryList.prototype.orderEntries;
    }
    /**
     *
     * An interface representing OrderHistory.
     * @record
     */
    function OrderHistory() { }
    Occ.OrderHistory = OrderHistory;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        OrderHistory.prototype.code;
        /**
         * \@member {string} [guid]
         * @type {?|undefined}
         */
        OrderHistory.prototype.guid;
        /**
         * \@member {Date} [placed]
         * @type {?|undefined}
         */
        OrderHistory.prototype.placed;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        OrderHistory.prototype.status;
        /**
         * \@member {string} [statusDisplay]
         * @type {?|undefined}
         */
        OrderHistory.prototype.statusDisplay;
        /**
         * \@member {Price} [total]
         * @type {?|undefined}
         */
        OrderHistory.prototype.total;
    }
    /**
     *
     * An interface representing PaginationModel.
     * @record
     */
    function PaginationModel() { }
    Occ.PaginationModel = PaginationModel;
    if (false) {
        /**
         * \@member {number} [currentPage]
         * @type {?|undefined}
         */
        PaginationModel.prototype.currentPage;
        /**
         * \@member {number} [pageSize]
         * @type {?|undefined}
         */
        PaginationModel.prototype.pageSize;
        /**
         * \@member {string} [sort]
         * @type {?|undefined}
         */
        PaginationModel.prototype.sort;
        /**
         * \@member {number} [totalPages]
         * @type {?|undefined}
         */
        PaginationModel.prototype.totalPages;
        /**
         * \@member {number} [totalResults]
         * @type {?|undefined}
         */
        PaginationModel.prototype.totalResults;
    }
    /**
     *
     * An interface representing SortModel.
     * @record
     */
    function SortModel() { }
    Occ.SortModel = SortModel;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        SortModel.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        SortModel.prototype.name;
        /**
         * \@member {boolean} [selected]
         * @type {?|undefined}
         */
        SortModel.prototype.selected;
    }
    /**
     *
     * An interface representing OrderHistoryList.
     * @record
     */
    function OrderHistoryList() { }
    Occ.OrderHistoryList = OrderHistoryList;
    if (false) {
        /**
         * \@member {OrderHistory[]} [orders]
         * @type {?|undefined}
         */
        OrderHistoryList.prototype.orders;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        OrderHistoryList.prototype.pagination;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        OrderHistoryList.prototype.sorts;
    }
    /**
     *
     * An interface representing OrderStatusUpdateElement.
     * @record
     */
    function OrderStatusUpdateElement() { }
    Occ.OrderStatusUpdateElement = OrderStatusUpdateElement;
    if (false) {
        /**
         * \@member {string} [baseSiteId]
         * @type {?|undefined}
         */
        OrderStatusUpdateElement.prototype.baseSiteId;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        OrderStatusUpdateElement.prototype.code;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        OrderStatusUpdateElement.prototype.status;
    }
    /**
     *
     * An interface representing OrderStatusUpdateElementList.
     * @record
     */
    function OrderStatusUpdateElementList() { }
    Occ.OrderStatusUpdateElementList = OrderStatusUpdateElementList;
    if (false) {
        /**
         * \@member {OrderStatusUpdateElement[]} [orderStatusUpdateElements]
         * @type {?|undefined}
         */
        OrderStatusUpdateElementList.prototype.orderStatusUpdateElements;
    }
    /**
     *
     * An interface representing Order.
     * @record
     */
    function Order() { }
    Occ.Order = Order;
    if (false) {
        /**
         * \@member {PromotionResult[]} [appliedOrderPromotions]
         * @type {?|undefined}
         */
        Order.prototype.appliedOrderPromotions;
        /**
         * \@member {PromotionResult[]} [appliedProductPromotions]
         * @type {?|undefined}
         */
        Order.prototype.appliedProductPromotions;
        /**
         * \@member {Voucher[]} [appliedVouchers]
         * @type {?|undefined}
         */
        Order.prototype.appliedVouchers;
        /**
         * \@member {boolean} [calculated]
         * @type {?|undefined}
         */
        Order.prototype.calculated;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Order.prototype.code;
        /**
         * \@member {Consignment[]} [consignments]
         * @type {?|undefined}
         */
        Order.prototype.consignments;
        /**
         * \@member {Date} [created]
         * @type {?|undefined}
         */
        Order.prototype.created;
        /**
         * \@member {Address} [deliveryAddress]
         * @type {?|undefined}
         */
        Order.prototype.deliveryAddress;
        /**
         * \@member {Price} [deliveryCost]
         * @type {?|undefined}
         */
        Order.prototype.deliveryCost;
        /**
         * \@member {number} [deliveryItemsQuantity]
         * @type {?|undefined}
         */
        Order.prototype.deliveryItemsQuantity;
        /**
         * \@member {DeliveryMode} [deliveryMode]
         * @type {?|undefined}
         */
        Order.prototype.deliveryMode;
        /**
         * \@member {DeliveryOrderEntryGroup[]} [deliveryOrderGroups]
         * @type {?|undefined}
         */
        Order.prototype.deliveryOrderGroups;
        /**
         * \@member {string} [deliveryStatus]
         * @type {?|undefined}
         */
        Order.prototype.deliveryStatus;
        /**
         * \@member {string} [deliveryStatusDisplay]
         * @type {?|undefined}
         */
        Order.prototype.deliveryStatusDisplay;
        /**
         * \@member {OrderEntry[]} [entries]
         * @type {?|undefined}
         */
        Order.prototype.entries;
        /**
         * \@member {boolean} [guestCustomer]
         * @type {?|undefined}
         */
        Order.prototype.guestCustomer;
        /**
         * \@member {string} [guid]
         * @type {?|undefined}
         */
        Order.prototype.guid;
        /**
         * \@member {boolean} [net]
         * @type {?|undefined}
         */
        Order.prototype.net;
        /**
         * \@member {Price} [orderDiscounts]
         * @type {?|undefined}
         */
        Order.prototype.orderDiscounts;
        /**
         * \@member {PaymentDetails} [paymentInfo]
         * @type {?|undefined}
         */
        Order.prototype.paymentInfo;
        /**
         * \@member {number} [pickupItemsQuantity]
         * @type {?|undefined}
         */
        Order.prototype.pickupItemsQuantity;
        /**
         * \@member {PickupOrderEntryGroup[]} [pickupOrderGroups]
         * @type {?|undefined}
         */
        Order.prototype.pickupOrderGroups;
        /**
         * \@member {Price} [productDiscounts]
         * @type {?|undefined}
         */
        Order.prototype.productDiscounts;
        /**
         * \@member {string} [site]
         * @type {?|undefined}
         */
        Order.prototype.site;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        Order.prototype.status;
        /**
         * \@member {string} [statusDisplay]
         * @type {?|undefined}
         */
        Order.prototype.statusDisplay;
        /**
         * \@member {string} [store]
         * @type {?|undefined}
         */
        Order.prototype.store;
        /**
         * \@member {Price} [subTotal]
         * @type {?|undefined}
         */
        Order.prototype.subTotal;
        /**
         * \@member {Price} [totalDiscounts]
         * @type {?|undefined}
         */
        Order.prototype.totalDiscounts;
        /**
         * \@member {number} [totalItems]
         * @type {?|undefined}
         */
        Order.prototype.totalItems;
        /**
         * \@member {Price} [totalPrice]
         * @type {?|undefined}
         */
        Order.prototype.totalPrice;
        /**
         * \@member {Price} [totalPriceWithTax]
         * @type {?|undefined}
         */
        Order.prototype.totalPriceWithTax;
        /**
         * \@member {Price} [totalTax]
         * @type {?|undefined}
         */
        Order.prototype.totalTax;
        /**
         * \@member {OrderEntry[]} [unconsignedEntries]
         * @type {?|undefined}
         */
        Order.prototype.unconsignedEntries;
        /**
         * \@member {Principal} [user]
         * @type {?|undefined}
         */
        Order.prototype.user;
    }
    /**
     *
     * An interface representing ReturnRequest.
     * @record
     */
    function ReturnRequest() { }
    Occ.ReturnRequest = ReturnRequest;
    if (false) {
        /**
         * \@member {boolean} [cancellable]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.cancellable;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.code;
        /**
         * \@member {Date} [creationTime]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.creationTime;
        /**
         * \@member {Price} [deliveryCost]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.deliveryCost;
        /**
         * \@member {order} [order]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.order;
        /**
         * \@member {boolean} [refundDeliveryCost]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.refundDeliveryCost;
        /**
         * \@member {ReturnRequestEntry[]} [returnEntries]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.returnEntries;
        /**
         * \@member {string} [returnLabelDownloadUrl]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.returnLabelDownloadUrl;
        /**
         * \@member {string} [rma]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.rma;
        /**
         * \@member {string} [status]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.status;
        /**
         * \@member {Price} [subTotal]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.subTotal;
        /**
         * \@member {Price} [totalPrice]
         * @type {?|undefined}
         */
        ReturnRequest.prototype.totalPrice;
    }
    /**
     *
     * An interface representing ReturnRequestEntry.
     * @record
     */
    function ReturnRequestEntry() { }
    Occ.ReturnRequestEntry = ReturnRequestEntry;
    if (false) {
        /**
         * \@member {OrderEntry} [orderEntry]
         * @type {?|undefined}
         */
        ReturnRequestEntry.prototype.orderEntry;
        /**
         * \@member {number} [expectedQuantity]
         * @type {?|undefined}
         */
        ReturnRequestEntry.prototype.expectedQuantity;
        /**
         * \@member {Price} [refundAmount]
         * @type {?|undefined}
         */
        ReturnRequestEntry.prototype.refundAmount;
    }
    /**
     *
     * An interface representing PaymentDetailsList.
     * @record
     */
    function PaymentDetailsList() { }
    Occ.PaymentDetailsList = PaymentDetailsList;
    if (false) {
        /**
         * \@member {PaymentDetails[]} [payments]
         * @type {?|undefined}
         */
        PaymentDetailsList.prototype.payments;
    }
    /**
     *
     * An interface representing PointOfServiceStock.
     * @record
     */
    function PointOfServiceStock() { }
    Occ.PointOfServiceStock = PointOfServiceStock;
    if (false) {
        /**
         * \@member {Address} [address]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.address;
        /**
         * \@member {string} [description]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.description;
        /**
         * \@member {string} [displayName]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.displayName;
        /**
         * \@member {number} [distanceKm]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.distanceKm;
        /**
         * \@member {{ [propertyName: string]: string }} [features]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.features;
        /**
         * \@member {string} [formattedDistance]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.formattedDistance;
        /**
         * \@member {GeoPoint} [geoPoint]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.geoPoint;
        /**
         * \@member {Image} [mapIcon]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.mapIcon;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.name;
        /**
         * \@member {OpeningSchedule} [openingHours]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.openingHours;
        /**
         * \@member {Stock} [stockInfo]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.stockInfo;
        /**
         * \@member {string} [storeContent]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.storeContent;
        /**
         * \@member {Image[]} [storeImages]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.storeImages;
        /**
         * \@member {string} [url]
         * @type {?|undefined}
         */
        PointOfServiceStock.prototype.url;
    }
    /**
     *
     * An interface representing ProductExpressUpdateElement.
     * @record
     */
    function ProductExpressUpdateElement() { }
    Occ.ProductExpressUpdateElement = ProductExpressUpdateElement;
    if (false) {
        /**
         * \@member {string} [catalogId]
         * @type {?|undefined}
         */
        ProductExpressUpdateElement.prototype.catalogId;
        /**
         * \@member {string} [catalogVersion]
         * @type {?|undefined}
         */
        ProductExpressUpdateElement.prototype.catalogVersion;
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        ProductExpressUpdateElement.prototype.code;
    }
    /**
     *
     * An interface representing ProductExpressUpdateElementList.
     * @record
     */
    function ProductExpressUpdateElementList() { }
    Occ.ProductExpressUpdateElementList = ProductExpressUpdateElementList;
    if (false) {
        /**
         * \@member {ProductExpressUpdateElement[]} [productExpressUpdateElements]
         * @type {?|undefined}
         */
        ProductExpressUpdateElementList.prototype.productExpressUpdateElements;
    }
    /**
     *
     * An interface representing ProductList.
     * @record
     */
    function ProductList() { }
    Occ.ProductList = ProductList;
    if (false) {
        /**
         * \@member {string} [catalog]
         * @type {?|undefined}
         */
        ProductList.prototype.catalog;
        /**
         * \@member {number} [currentPage]
         * @type {?|undefined}
         */
        ProductList.prototype.currentPage;
        /**
         * \@member {Product[]} [products]
         * @type {?|undefined}
         */
        ProductList.prototype.products;
        /**
         * \@member {number} [totalPageCount]
         * @type {?|undefined}
         */
        ProductList.prototype.totalPageCount;
        /**
         * \@member {number} [totalProductCount]
         * @type {?|undefined}
         */
        ProductList.prototype.totalProductCount;
        /**
         * \@member {string} [version]
         * @type {?|undefined}
         */
        ProductList.prototype.version;
    }
    /**
     *
     * An interface representing ProductReferenceList.
     * @record
     */
    function ProductReferenceList() { }
    Occ.ProductReferenceList = ProductReferenceList;
    if (false) {
        /**
         * \@member {ProductReference[]} [references]
         * @type {?|undefined}
         */
        ProductReferenceList.prototype.references;
    }
    /**
     *
     * An interface representing SpellingSuggestion.
     * @record
     */
    function SpellingSuggestion() { }
    Occ.SpellingSuggestion = SpellingSuggestion;
    if (false) {
        /**
         * \@member {string} [query]
         * @type {?|undefined}
         */
        SpellingSuggestion.prototype.query;
        /**
         * \@member {string} [suggestion]
         * @type {?|undefined}
         */
        SpellingSuggestion.prototype.suggestion;
    }
    /**
     *
     * An interface representing ProductSearchPage.
     * @record
     */
    function ProductSearchPage() { }
    Occ.ProductSearchPage = ProductSearchPage;
    if (false) {
        /**
         * \@member {Breadcrumb[]} [breadcrumbs]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.breadcrumbs;
        /**
         * \@member {string} [categoryCode]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.categoryCode;
        /**
         * \@member {SearchState} [currentQuery]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.currentQuery;
        /**
         * \@member {Facet[]} [facets]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.facets;
        /**
         * \@member {string} [freeTextSearch]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.freeTextSearch;
        /**
         * \@member {string} [keywordRedirectUrl]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.keywordRedirectUrl;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.pagination;
        /**
         * \@member {Product[]} [products]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.products;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.sorts;
        /**
         * \@member {SpellingSuggestion} [spellingSuggestion]
         * @type {?|undefined}
         */
        ProductSearchPage.prototype.spellingSuggestion;
    }
    /**
     *
     * An interface representing PromotionList.
     * @record
     */
    function PromotionList() { }
    Occ.PromotionList = PromotionList;
    if (false) {
        /**
         * \@member {Promotion[]} [promotions]
         * @type {?|undefined}
         */
        PromotionList.prototype.promotions;
    }
    /**
     *
     * An interface representing PromotionResultList.
     * @record
     */
    function PromotionResultList() { }
    Occ.PromotionResultList = PromotionResultList;
    if (false) {
        /**
         * \@member {PromotionResult[]} [promotions]
         * @type {?|undefined}
         */
        PromotionResultList.prototype.promotions;
    }
    /**
     *
     * An interface representing ReviewList.
     * @record
     */
    function ReviewList() { }
    Occ.ReviewList = ReviewList;
    if (false) {
        /**
         * \@member {Review[]} [reviews]
         * @type {?|undefined}
         */
        ReviewList.prototype.reviews;
    }
    /**
     *
     * An interface representing SaveCartResult.
     * @record
     */
    function SaveCartResult() { }
    Occ.SaveCartResult = SaveCartResult;
    if (false) {
        /**
         * \@member {Cart} [savedCartData]
         * @type {?|undefined}
         */
        SaveCartResult.prototype.savedCartData;
    }
    /**
     *
     * An interface representing StoreFinderSearchPage.
     * @record
     */
    function StoreFinderSearchPage() { }
    Occ.StoreFinderSearchPage = StoreFinderSearchPage;
    if (false) {
        /**
         * \@member {number} [boundEastLongitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundEastLongitude;
        /**
         * \@member {number} [boundNorthLatitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundNorthLatitude;
        /**
         * \@member {number} [boundSouthLatitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundSouthLatitude;
        /**
         * \@member {number} [boundWestLongitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.boundWestLongitude;
        /**
         * \@member {string} [locationText]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.locationText;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.pagination;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.sorts;
        /**
         * \@member {number} [sourceLatitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.sourceLatitude;
        /**
         * \@member {number} [sourceLongitude]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.sourceLongitude;
        /**
         * \@member {PointOfService[]} [stores]
         * @type {?|undefined}
         */
        StoreFinderSearchPage.prototype.stores;
    }
    /**
     *
     * An interface representing StoreFinderStockSearchPage.
     * @record
     */
    function StoreFinderStockSearchPage() { }
    Occ.StoreFinderStockSearchPage = StoreFinderStockSearchPage;
    if (false) {
        /**
         * \@member {number} [boundEastLongitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundEastLongitude;
        /**
         * \@member {number} [boundNorthLatitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundNorthLatitude;
        /**
         * \@member {number} [boundSouthLatitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundSouthLatitude;
        /**
         * \@member {number} [boundWestLongitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.boundWestLongitude;
        /**
         * \@member {string} [locationText]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.locationText;
        /**
         * \@member {PaginationModel} [pagination]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.pagination;
        /**
         * \@member {Product} [product]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.product;
        /**
         * \@member {SortModel[]} [sorts]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.sorts;
        /**
         * \@member {number} [sourceLatitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.sourceLatitude;
        /**
         * \@member {number} [sourceLongitude]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.sourceLongitude;
        /**
         * \@member {PointOfServiceStock[]} [stores]
         * @type {?|undefined}
         */
        StoreFinderStockSearchPage.prototype.stores;
    }
    /**
     *
     * An interface representing Suggestion.
     * @record
     */
    function Suggestion() { }
    Occ.Suggestion = Suggestion;
    if (false) {
        /**
         * \@member {string} [value]
         * @type {?|undefined}
         */
        Suggestion.prototype.value;
    }
    /**
     *
     * An interface representing SuggestionList.
     * @record
     */
    function SuggestionList() { }
    Occ.SuggestionList = SuggestionList;
    if (false) {
        /**
         * \@member {Suggestion[]} [suggestions]
         * @type {?|undefined}
         */
        SuggestionList.prototype.suggestions;
    }
    /**
     *
     * An interface representing Title.
     * @record
     */
    function Title() { }
    Occ.Title = Title;
    if (false) {
        /**
         * \@member {string} [code]
         * @type {?|undefined}
         */
        Title.prototype.code;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        Title.prototype.name;
    }
    /**
     *
     * An interface representing TitleList.
     * @record
     */
    function TitleList() { }
    Occ.TitleList = TitleList;
    if (false) {
        /**
         * \@member {Title[]} [titles]
         * @type {?|undefined}
         */
        TitleList.prototype.titles;
    }
    /**
     *
     * An interface representing UserGroup.
     * @record
     */
    function UserGroup() { }
    Occ.UserGroup = UserGroup;
    if (false) {
        /**
         * \@member {Principal[]} [members]
         * @type {?|undefined}
         */
        UserGroup.prototype.members;
        /**
         * \@member {number} [membersCount]
         * @type {?|undefined}
         */
        UserGroup.prototype.membersCount;
        /**
         * \@member {string} [name]
         * @type {?|undefined}
         */
        UserGroup.prototype.name;
        /**
         * \@member {UserGroup[]} [subGroups]
         * @type {?|undefined}
         */
        UserGroup.prototype.subGroups;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        UserGroup.prototype.uid;
    }
    /**
     *
     * An interface representing UserGroupList.
     * @record
     */
    function UserGroupList() { }
    Occ.UserGroupList = UserGroupList;
    if (false) {
        /**
         * \@member {number} [currentPage]
         * @type {?|undefined}
         */
        UserGroupList.prototype.currentPage;
        /**
         * \@member {number} [numberOfPages]
         * @type {?|undefined}
         */
        UserGroupList.prototype.numberOfPages;
        /**
         * \@member {number} [pageSize]
         * @type {?|undefined}
         */
        UserGroupList.prototype.pageSize;
        /**
         * \@member {number} [totalNumber]
         * @type {?|undefined}
         */
        UserGroupList.prototype.totalNumber;
        /**
         * \@member {UserGroup[]} [userGroups]
         * @type {?|undefined}
         */
        UserGroupList.prototype.userGroups;
    }
    /**
     *
     * An interface representing UserSignUp.
     * @record
     */
    function UserSignUp() { }
    Occ.UserSignUp = UserSignUp;
    if (false) {
        /**
         * \@member {string} [firstName]
         * @type {?|undefined}
         */
        UserSignUp.prototype.firstName;
        /**
         * \@member {string} [lastName]
         * @type {?|undefined}
         */
        UserSignUp.prototype.lastName;
        /**
         * \@member {string} [password]
         * @type {?|undefined}
         */
        UserSignUp.prototype.password;
        /**
         * \@member {string} [titleCode]
         * @type {?|undefined}
         */
        UserSignUp.prototype.titleCode;
        /**
         * \@member {string} [uid]
         * @type {?|undefined}
         */
        UserSignUp.prototype.uid;
    }
    /**
     * @record
     */
    function StoreCount() { }
    Occ.StoreCount = StoreCount;
    if (false) {
        /** @type {?|undefined} */
        StoreCount.prototype.count;
        /** @type {?|undefined} */
        StoreCount.prototype.isoCode;
        /** @type {?|undefined} */
        StoreCount.prototype.name;
        /** @type {?|undefined} */
        StoreCount.prototype.type;
    }
    /**
     * @record
     */
    function StoreCountList() { }
    Occ.StoreCountList = StoreCountList;
    if (false) {
        /** @type {?|undefined} */
        StoreCountList.prototype.countriesAndRegionsStoreCount;
    }
    /**
     *
     * An interface representing VoucherList.
     * @record
     */
    function VoucherList() { }
    Occ.VoucherList = VoucherList;
    if (false) {
        /**
         * \@member {Voucher[]} [vouchers]
         * @type {?|undefined}
         */
        VoucherList.prototype.vouchers;
    }
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
    /**
     * @record
     */
    function AnonymousConsent() { }
    Occ.AnonymousConsent = AnonymousConsent;
    if (false) {
        /** @type {?|undefined} */
        AnonymousConsent.prototype.templateCode;
        /** @type {?|undefined} */
        AnonymousConsent.prototype.version;
        /** @type {?|undefined} */
        AnonymousConsent.prototype.consentState;
    }
    let CONSENT_STATUS;
    (function (CONSENT_STATUS) {
        CONSENT_STATUS["ANONYMOUS_CONSENT_GIVEN"] = "GIVEN";
        CONSENT_STATUS["ANONYMOUS_CONSENT_WITHDRAWN"] = "WITHDRAWN";
    })(CONSENT_STATUS = Occ.CONSENT_STATUS || (Occ.CONSENT_STATUS = {}));
    /**
     * @record
     */
    function ConsentTemplate() { }
    Occ.ConsentTemplate = ConsentTemplate;
    if (false) {
        /** @type {?|undefined} */
        ConsentTemplate.prototype.id;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.name;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.description;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.version;
        /** @type {?|undefined} */
        ConsentTemplate.prototype.currentConsent;
    }
    /**
     * @record
     */
    function Consent() { }
    Occ.Consent = Consent;
    if (false) {
        /** @type {?|undefined} */
        Consent.prototype.code;
        /** @type {?|undefined} */
        Consent.prototype.consentGivenDate;
        /** @type {?|undefined} */
        Consent.prototype.consentWithdrawnDate;
    }
    /**
     * @record
     */
    function ConsentTemplateList() { }
    Occ.ConsentTemplateList = ConsentTemplateList;
    if (false) {
        /** @type {?|undefined} */
        ConsentTemplateList.prototype.consentTemplates;
    }
    /**
     * @record
     */
    function BaseSites() { }
    Occ.BaseSites = BaseSites;
    if (false) {
        /** @type {?|undefined} */
        BaseSites.prototype.baseSites;
    }
    /**
     * @record
     */
    function BaseSite() { }
    Occ.BaseSite = BaseSite;
    if (false) {
        /** @type {?|undefined} */
        BaseSite.prototype.channel;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultLanguage;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultPreviewCatalogId;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultPreviewCategoryCode;
        /** @type {?|undefined} */
        BaseSite.prototype.defaultPreviewProductCode;
        /** @type {?|undefined} */
        BaseSite.prototype.locale;
        /** @type {?|undefined} */
        BaseSite.prototype.name;
        /** @type {?|undefined} */
        BaseSite.prototype.theme;
        /** @type {?|undefined} */
        BaseSite.prototype.uid;
        /** @type {?|undefined} */
        BaseSite.prototype.stores;
        /** @type {?|undefined} */
        BaseSite.prototype.urlPatterns;
        /** @type {?|undefined} */
        BaseSite.prototype.urlEncodingAttributes;
    }
    /**
     * @record
     */
    function BaseStore() { }
    Occ.BaseStore = BaseStore;
    if (false) {
        /** @type {?|undefined} */
        BaseStore.prototype.currencies;
        /** @type {?|undefined} */
        BaseStore.prototype.defaultCurrency;
        /** @type {?|undefined} */
        BaseStore.prototype.languages;
        /** @type {?|undefined} */
        BaseStore.prototype.defaultLanguage;
    }
    /**
     * @record
     */
    function ProductInterestEntry() { }
    Occ.ProductInterestEntry = ProductInterestEntry;
    if (false) {
        /** @type {?|undefined} */
        ProductInterestEntry.prototype.interestType;
        /** @type {?|undefined} */
        ProductInterestEntry.prototype.dateAdded;
        /** @type {?|undefined} */
        ProductInterestEntry.prototype.expirationDate;
    }
    /**
     * @record
     */
    function ProductInterestEntryRelation() { }
    Occ.ProductInterestEntryRelation = ProductInterestEntryRelation;
    if (false) {
        /** @type {?|undefined} */
        ProductInterestEntryRelation.prototype.product;
        /** @type {?|undefined} */
        ProductInterestEntryRelation.prototype.productInterestEntry;
    }
    /**
     * @record
     */
    function ProductInterestSearchResult() { }
    Occ.ProductInterestSearchResult = ProductInterestSearchResult;
    if (false) {
        /** @type {?|undefined} */
        ProductInterestSearchResult.prototype.results;
        /** @type {?|undefined} */
        ProductInterestSearchResult.prototype.sorts;
        /** @type {?|undefined} */
        ProductInterestSearchResult.prototype.pagination;
    }
    let NotificationType;
    (function (NotificationType) {
        NotificationType["BACK_IN_STOCK"] = "BACK_IN_STOCK";
    })(NotificationType = Occ.NotificationType || (Occ.NotificationType = {}));
})(Occ || (Occ = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEtBQVcsR0FBRyxDQXkvSG5CO0FBei9IRCxXQUFpQixHQUFHOzs7Ozs7SUFLbEIsc0JBU0M7Ozs7Ozs7UUFMQywwQkFBaUI7Ozs7O1FBSWpCLHVCQUFjOzs7Ozs7O0lBT2hCLHFCQWlCQzs7Ozs7OztRQWJDLDRCQUFvQjs7Ozs7UUFJcEIseUJBQWlCOzs7OztRQUlqQiw4QkFBc0I7Ozs7O1FBSXRCLHNCQUFjOzs7Ozs7O0lBT2hCLHlCQUtDOzs7Ozs7O1FBREMsNkJBQW1COzs7Ozs7O0lBT3JCLHNCQXlFQzs7Ozs7OztRQXJFQyw4QkFBcUI7Ozs7O1FBSXJCLDBCQUFrQjs7Ozs7UUFJbEIsaUNBQXlCOzs7OztRQUl6Qix3QkFBZTs7Ozs7UUFJZiw0QkFBbUI7Ozs7O1FBSW5CLG1DQUEwQjs7Ozs7UUFJMUIscUJBQVk7Ozs7O1FBSVosMkJBQWtCOzs7OztRQUlsQix3QkFBZTs7Ozs7UUFJZix3QkFBZTs7Ozs7UUFJZix3QkFBZTs7Ozs7UUFJZiw2QkFBb0I7Ozs7O1FBSXBCLHlCQUFnQjs7Ozs7UUFJaEIsa0NBQTBCOzs7OztRQUkxQix3QkFBZTs7Ozs7UUFJZiw0QkFBbUI7Ozs7O1FBSW5CLHVCQUFjOzs7OztRQUlkLHVDQUErQjs7Ozs7OztJQU9qQywwQkFLQzs7Ozs7OztRQURDLGdDQUFzQjs7Ozs7Ozs7O0lBU3hCLHlCQXVCQzs7Ozs7OztRQW5CQyw2QkFBaUI7Ozs7OztRQUtqQiw0QkFBZ0I7Ozs7O1FBSWhCLDZCQUFpQjs7Ozs7O1FBS2pCLGlDQUFxQjs7Ozs7UUFJckIsMEJBQWM7Ozs7Ozs7OztJQVNoQix3QkFLQzs7Ozs7OztRQURDLDJCQUFzQjs7Ozs7OztJQU94QixnQ0FhQzs7Ozs7OztRQVRDLHFDQUFrQjs7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OztRQUNmLHVCQUFhOztRQUNiLDBCQUFxQjs7UUFDckIsK0JBQXVCOztRQUN2Qix5Q0FBaUM7Ozs7O0lBR25DLHdCQUtDOzs7O1FBSkMsK0JBQXdCOztRQUN4QixvQ0FBMkI7O1FBQzNCLDhCQUF1Qjs7UUFDdkIsb0NBQTJCOzs7OztJQUc3QixtQ0FJQzs7OztRQUhDLDRDQUFnQzs7UUFDaEMseUNBQW1COztRQUNuQiw4Q0FBd0I7Ozs7O0lBRzFCLDJDQUdDOzs7O1FBRkMsK0NBQWtCOztRQUNsQiw0REFBOEM7Ozs7O0lBR2hELDBDQUlDOzs7O1FBSEMsOENBQXlDOztRQUN6Qyw0Q0FBZTs7UUFDZixpREFBd0I7O0lBRzFCLElBQVksZ0JBRVg7SUFGRCxXQUFZLGdCQUFnQjtRQUMxQixtREFBK0IsQ0FBQTtJQUNqQyxDQUFDLEVBRlcsZ0JBQWdCLEdBQWhCLG9CQUFnQixLQUFoQixvQkFBZ0IsUUFFM0I7QUFDSCxDQUFDLEVBei9IZ0IsR0FBRyxLQUFILEdBQUcsUUF5L0huQiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBuYW1lc3BhY2UgT2NjIHtcbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ291bnRyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJlZ2lvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb3VudHJ5SXNvXVxuICAgICAqL1xuICAgIGNvdW50cnlJc28/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVTaG9ydF1cbiAgICAgKi9cbiAgICBpc29jb2RlU2hvcnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUmVnaW9uTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmVnaW9uTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmVnaW9uW119IFtyZWdpb25zXVxuICAgICAqL1xuICAgIHJlZ2lvbnM/OiBSZWdpb25bXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEFkZHJlc3MuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFkZHJlc3Mge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbXBhbnlOYW1lXVxuICAgICAqL1xuICAgIGNvbXBhbnlOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvdW50cnl9IFtjb3VudHJ5XVxuICAgICAqL1xuICAgIGNvdW50cnk/OiBDb3VudHJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtkZWZhdWx0QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWZhdWx0QWRkcmVzcz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZW1haWxdXG4gICAgICovXG4gICAgZW1haWw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmlyc3ROYW1lXVxuICAgICAqL1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWRBZGRyZXNzXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZEFkZHJlc3M/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGFzdE5hbWVdXG4gICAgICovXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGluZTFdXG4gICAgICovXG4gICAgbGluZTE/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGluZTJdXG4gICAgICovXG4gICAgbGluZTI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcGhvbmVdXG4gICAgICovXG4gICAgcGhvbmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcG9zdGFsQ29kZV1cbiAgICAgKi9cbiAgICBwb3N0YWxDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1JlZ2lvbn0gW3JlZ2lvbl1cbiAgICAgKi9cbiAgICByZWdpb24/OiBSZWdpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NoaXBwaW5nQWRkcmVzc11cbiAgICAgKi9cbiAgICBzaGlwcGluZ0FkZHJlc3M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlQ29kZV1cbiAgICAgKi9cbiAgICB0aXRsZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdG93bl1cbiAgICAgKi9cbiAgICB0b3duPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt2aXNpYmxlSW5BZGRyZXNzQm9va11cbiAgICAgKi9cbiAgICB2aXNpYmxlSW5BZGRyZXNzQm9vaz86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBBZGRyZXNzTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3NbXX0gW2FkZHJlc3Nlc11cbiAgICAgKi9cbiAgICBhZGRyZXNzZXM/OiBBZGRyZXNzW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBFcnJvck1vZGVsLlxuICAgKiBFcnJvciBtZXNzYWdlXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEVycm9yTW9kZWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW21lc3NhZ2VdIERlc2NyaXB0aXZlLCBodW1hbiByZWFkYWJsZSBlcnJvciBtZXNzYWdlLlxuICAgICAqL1xuICAgIG1lc3NhZ2U/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcmVhc29uXSBBZGRpdGlvbmFsIGNsYXNzaWZpY2F0aW9uIHNwZWNpZmljIGZvciBlYWNoXG4gICAgICogZXJyb3IgdHlwZSBlLmcuICdub1N0b2NrJy5cbiAgICAgKi9cbiAgICByZWFzb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ViamVjdF0gSWRlbnRpZmllciBvZiB0aGUgcmVsYXRlZCBvYmplY3QgZS5nLiAnMScuXG4gICAgICovXG4gICAgc3ViamVjdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWJqZWN0VHlwZV0gVHlwZSBvZiB0aGUgb2JqZWN0IHJlbGF0ZWQgdG8gdGhlIGVycm9yXG4gICAgICogZS5nLiAnZW50cnknLlxuICAgICAqL1xuICAgIHN1YmplY3RUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVdIFR5cGUgb2YgdGhlIGVycm9yIGUuZy4gJ0xvd1N0b2NrRXJyb3InLlxuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBFcnJvckxpc3QuXG4gICAqIExpc3Qgb2YgZXJyb3JzXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEVycm9yTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RXJyb3JNb2RlbFtdfSBbZXJyb3JzXVxuICAgICAqL1xuICAgIGVycm9ycz86IEVycm9yTW9kZWxbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEFkZHJlc3NWYWxpZGF0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzVmFsaWRhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVjaXNpb25dXG4gICAgICovXG4gICAgZGVjaXNpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RXJyb3JMaXN0fSBbZXJyb3JzXVxuICAgICAqL1xuICAgIGVycm9ycz86IEVycm9yTGlzdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzW119IFtzdWdnZXN0ZWRBZGRyZXNzZXNdXG4gICAgICovXG4gICAgc3VnZ2VzdGVkQWRkcmVzc2VzPzogQWRkcmVzc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJpY2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByaWNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjdXJyZW5jeUlzb11cbiAgICAgKi9cbiAgICBjdXJyZW5jeUlzbz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWRWYWx1ZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWRWYWx1ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFttYXhRdWFudGl0eV1cbiAgICAgKi9cbiAgICBtYXhRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFttaW5RdWFudGl0eV1cbiAgICAgKi9cbiAgICBtaW5RdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZVR5cGV9IFtwcmljZVR5cGVdIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQlVZJywgJ0ZST00nXG4gICAgICovXG4gICAgcHJpY2VUeXBlPzogUHJpY2VUeXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3RvY2suXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFN0b2NrIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzdG9ja0xldmVsXVxuICAgICAqL1xuICAgIHN0b2NrTGV2ZWw/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvY2tMZXZlbFN0YXR1c11cbiAgICAgKi9cbiAgICBzdG9ja0xldmVsU3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgSW1hZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEltYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthbHRUZXh0XVxuICAgICAqL1xuICAgIGFsdFRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0XVxuICAgICAqL1xuICAgIGZvcm1hdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtnYWxsZXJ5SW5kZXhdXG4gICAgICovXG4gICAgZ2FsbGVyeUluZGV4PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlVHlwZX0gW2ltYWdlVHlwZV0gUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdQUklNQVJZJyxcbiAgICAgKiAnR0FMTEVSWSdcbiAgICAgKi9cbiAgICBpbWFnZVR5cGU/OiBJbWFnZVR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRPcHRpb25RdWFsaWZpZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbaW1hZ2VdXG4gICAgICovXG4gICAgaW1hZ2U/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcXVhbGlmaWVyXVxuICAgICAqL1xuICAgIHF1YWxpZmllcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRPcHRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3ByaWNlRGF0YV1cbiAgICAgKi9cbiAgICBwcmljZURhdGE/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrXVxuICAgICAqL1xuICAgIHN0b2NrPzogU3RvY2s7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9uUXVhbGlmaWVyW119IFt2YXJpYW50T3B0aW9uUXVhbGlmaWVyc11cbiAgICAgKi9cbiAgICB2YXJpYW50T3B0aW9uUXVhbGlmaWVycz86IFZhcmlhbnRPcHRpb25RdWFsaWZpZXJbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEJhc2VPcHRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VPcHRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb25bXX0gW29wdGlvbnNdXG4gICAgICovXG4gICAgb3B0aW9ucz86IFZhcmlhbnRPcHRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9ufSBbc2VsZWN0ZWRdXG4gICAgICovXG4gICAgc2VsZWN0ZWQ/OiBWYXJpYW50T3B0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhcmlhbnRUeXBlXVxuICAgICAqL1xuICAgIHZhcmlhbnRUeXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU2VhcmNoUXVlcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNlYXJjaFF1ZXJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNlYXJjaFN0YXRlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTZWFyY2hTdGF0ZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoUXVlcnl9IFtxdWVyeV1cbiAgICAgKi9cbiAgICBxdWVyeT86IFNlYXJjaFF1ZXJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBCcmVhZGNydW1iLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBCcmVhZGNydW1iIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmYWNldENvZGVdXG4gICAgICovXG4gICAgZmFjZXRDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0TmFtZV1cbiAgICAgKi9cbiAgICBmYWNldE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXRWYWx1ZUNvZGVdXG4gICAgICovXG4gICAgZmFjZXRWYWx1ZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXRWYWx1ZU5hbWVdXG4gICAgICovXG4gICAgZmFjZXRWYWx1ZU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U2VhcmNoU3RhdGV9IFtyZW1vdmVRdWVyeV1cbiAgICAgKi9cbiAgICByZW1vdmVRdWVyeT86IFNlYXJjaFN0YXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFN0YXRlfSBbdHJ1bmNhdGVRdWVyeV1cbiAgICAgKi9cbiAgICB0cnVuY2F0ZVF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb21wb25lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW21vZGlmaWVkVGltZV1cbiAgICAgKi9cbiAgICBtb2RpZmllZFRpbWU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnl9IFtvdGhlclByb3BlcnRpZXNdXG4gICAgICovXG4gICAgb3RoZXJQcm9wZXJ0aWVzPzogYW55O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVDb2RlXVxuICAgICAqL1xuICAgIHR5cGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb21wb25lbnRMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb21wb25lbnRbXX0gW2NvbXBvbmVudF1cbiAgICAgKi9cbiAgICBjb21wb25lbnQ/OiBDb21wb25lbnRbXSB8IGFueVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29udGVudFNsb3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnRlbnRTbG90IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb21wb25lbnRMaXN0fSBbY29tcG9uZW50c11cbiAgICAgKi9cbiAgICBjb21wb25lbnRzPzogQ29tcG9uZW50TGlzdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcG9zaXRpb25dXG4gICAgICovXG4gICAgcG9zaXRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2xvdElkXVxuICAgICAqL1xuICAgIHNsb3RJZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2xvdFNoYXJlZF1cbiAgICAgKi9cbiAgICBzbG90U2hhcmVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzbG90U3RhdHVzXVxuICAgICAqL1xuICAgIHNsb3RTdGF0dXM/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb250ZW50U2xvdExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnRlbnRTbG90TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29udGVudFNsb3RbXX0gW2NvbnRlbnRTbG90XVxuICAgICAqL1xuICAgIGNvbnRlbnRTbG90PzogQ29udGVudFNsb3RbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENNU1BhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENNU1BhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnRlbnRTbG90TGlzdH0gW2NvbnRlbnRTbG90c11cbiAgICAgKi9cbiAgICBjb250ZW50U2xvdHM/OiBDb250ZW50U2xvdExpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlZmF1bHRQYWdlXVxuICAgICAqL1xuICAgIGRlZmF1bHRQYWdlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGVtcGxhdGVdXG4gICAgICovXG4gICAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVdXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHlwZUNvZGVdXG4gICAgICovXG4gICAgdHlwZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcmRUeXBlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJkVHlwZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcmRUeXBlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FyZFR5cGVMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJkVHlwZVtdfSBbY2FyZFR5cGVzXVxuICAgICAqL1xuICAgIGNhcmRUeXBlcz86IENhcmRUeXBlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvbk9yZGVyRW50cnlDb25zdW1lZCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYWRqdXN0ZWRVbml0UHJpY2VdXG4gICAgICovXG4gICAgYWRqdXN0ZWRVbml0UHJpY2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW29yZGVyRW50cnlOdW1iZXJdXG4gICAgICovXG4gICAgb3JkZXJFbnRyeU51bWJlcj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvblJlc3RyaWN0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25SZXN0cmljdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcmVzdHJpY3Rpb25UeXBlXVxuICAgICAqL1xuICAgIHJlc3RyaWN0aW9uVHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119IFtjb3VsZEZpcmVNZXNzYWdlc11cbiAgICAgKi9cbiAgICBjb3VsZEZpcmVNZXNzYWdlcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtlbmFibGVkXVxuICAgICAqL1xuICAgIGVuYWJsZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtlbmREYXRlXVxuICAgICAqL1xuICAgIGVuZERhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ1tdfSBbZmlyZWRNZXNzYWdlc11cbiAgICAgKi9cbiAgICBmaXJlZE1lc3NhZ2VzPzogc3RyaW5nW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFtwcm9kdWN0QmFubmVyXVxuICAgICAqL1xuICAgIHByb2R1Y3RCYW5uZXI/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwcm9tb3Rpb25Hcm91cF1cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25Hcm91cD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwcm9tb3Rpb25UeXBlXVxuICAgICAqL1xuICAgIHByb21vdGlvblR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdHJpY3Rpb25bXX0gW3Jlc3RyaWN0aW9uc11cbiAgICAgKi9cbiAgICByZXN0cmljdGlvbnM/OiBQcm9tb3Rpb25SZXN0cmljdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtzdGFydERhdGVdXG4gICAgICovXG4gICAgc3RhcnREYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb21vdGlvblJlc3VsdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdWx0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWRbXX0gW2NvbnN1bWVkRW50cmllc11cbiAgICAgKi9cbiAgICBjb25zdW1lZEVudHJpZXM/OiBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb259IFtwcm9tb3Rpb25dXG4gICAgICovXG4gICAgcHJvbW90aW9uPzogUHJvbW90aW9uO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ3VycmVuY3kuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbYWN0aXZlXVxuICAgICAqL1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzeW1ib2xdXG4gICAgICovXG4gICAgc3ltYm9sPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVm91Y2hlci5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFthcHBsaWVkVmFsdWVdXG4gICAgICovXG4gICAgYXBwbGllZFZhbHVlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1cnJlbmN5fSBbY3VycmVuY3ldXG4gICAgICovXG4gICAgY3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZnJlZVNoaXBwaW5nXVxuICAgICAqL1xuICAgIGZyZWVTaGlwcGluZz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlRm9ybWF0dGVkXVxuICAgICAqL1xuICAgIHZhbHVlRm9ybWF0dGVkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlU3RyaW5nXVxuICAgICAqL1xuICAgIHZhbHVlU3RyaW5nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZvdWNoZXJDb2RlXVxuICAgICAqL1xuICAgIHZvdWNoZXJDb2RlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRGVsaXZlcnlNb2RlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeU1vZGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2RlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBHZW9Qb2ludC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgR2VvUG9pbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2xhdGl0dWRlXVxuICAgICAqL1xuICAgIGxhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2xvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBsb25naXR1ZGU/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBUaW1lLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBUaW1lIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWRIb3VyXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZEhvdXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbaG91cl1cbiAgICAgKi9cbiAgICBob3VyPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW21pbnV0ZV1cbiAgICAgKi9cbiAgICBtaW51dGU/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTcGVjaWFsT3BlbmluZ0RheS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU3BlY2lhbE9wZW5pbmdEYXkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjbG9zZWRdXG4gICAgICovXG4gICAgY2xvc2VkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbY2xvc2luZ1RpbWVdXG4gICAgICovXG4gICAgY2xvc2luZ1RpbWU/OiBUaW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvbW1lbnRdXG4gICAgICovXG4gICAgY29tbWVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZGF0ZV1cbiAgICAgKi9cbiAgICBkYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmb3JtYXR0ZWREYXRlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERhdGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtvcGVuaW5nVGltZV1cbiAgICAgKi9cbiAgICBvcGVuaW5nVGltZT86IFRpbWU7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBXZWVrZGF5T3BlbmluZ0RheS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgV2Vla2RheU9wZW5pbmdEYXkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjbG9zZWRdXG4gICAgICovXG4gICAgY2xvc2VkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbY2xvc2luZ1RpbWVdXG4gICAgICovXG4gICAgY2xvc2luZ1RpbWU/OiBUaW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1RpbWV9IFtvcGVuaW5nVGltZV1cbiAgICAgKi9cbiAgICBvcGVuaW5nVGltZT86IFRpbWU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbd2Vla0RheV1cbiAgICAgKi9cbiAgICB3ZWVrRGF5Pzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3BlbmluZ1NjaGVkdWxlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcGVuaW5nU2NoZWR1bGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3BlY2lhbE9wZW5pbmdEYXlbXX0gW3NwZWNpYWxEYXlPcGVuaW5nTGlzdF1cbiAgICAgKi9cbiAgICBzcGVjaWFsRGF5T3BlbmluZ0xpc3Q/OiBTcGVjaWFsT3BlbmluZ0RheVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1dlZWtkYXlPcGVuaW5nRGF5W119IFt3ZWVrRGF5T3BlbmluZ0xpc3RdXG4gICAgICovXG4gICAgd2Vla0RheU9wZW5pbmdMaXN0PzogV2Vla2RheU9wZW5pbmdEYXlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBvaW50T2ZTZXJ2aWNlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQb2ludE9mU2VydmljZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2FkZHJlc3NdXG4gICAgICovXG4gICAgYWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGlzcGxheU5hbWVdXG4gICAgICovXG4gICAgZGlzcGxheU5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGlzdGFuY2VLbV1cbiAgICAgKi9cbiAgICBkaXN0YW5jZUttPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3sgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nIH19IFtmZWF0dXJlc11cbiAgICAgKi9cbiAgICBmZWF0dXJlcz86IHsgW3Byb3BlcnR5TmFtZTogc3RyaW5nXTogc3RyaW5nIH07XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkRGlzdGFuY2VdXG4gICAgICovXG4gICAgZm9ybWF0dGVkRGlzdGFuY2U/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7R2VvUG9pbnR9IFtnZW9Qb2ludF1cbiAgICAgKi9cbiAgICBnZW9Qb2ludD86IEdlb1BvaW50O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbbWFwSWNvbl1cbiAgICAgKi9cbiAgICBtYXBJY29uPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09wZW5pbmdTY2hlZHVsZX0gW29wZW5pbmdIb3Vyc11cbiAgICAgKi9cbiAgICBvcGVuaW5nSG91cnM/OiBPcGVuaW5nU2NoZWR1bGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RvcmVDb250ZW50XVxuICAgICAqL1xuICAgIHN0b3JlQ29udGVudD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVtdfSBbc3RvcmVJbWFnZXNdXG4gICAgICovXG4gICAgc3RvcmVJbWFnZXM/OiBJbWFnZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRlZ29yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2V9IFtpbWFnZV1cbiAgICAgKi9cbiAgICBpbWFnZT86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGZWF0dXJlVW5pdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVVuaXQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzeW1ib2xdXG4gICAgICovXG4gICAgc3ltYm9sPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VuaXRUeXBlXVxuICAgICAqL1xuICAgIHVuaXRUeXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmVhdHVyZVZhbHVlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGZWF0dXJlVmFsdWUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhbHVlXVxuICAgICAqL1xuICAgIHZhbHVlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmVhdHVyZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjb21wYXJhYmxlXVxuICAgICAqL1xuICAgIGNvbXBhcmFibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZlYXR1cmVVbml0fSBbZmVhdHVyZVVuaXRdXG4gICAgICovXG4gICAgZmVhdHVyZVVuaXQ/OiBGZWF0dXJlVW5pdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGZWF0dXJlVmFsdWVbXX0gW2ZlYXR1cmVWYWx1ZXNdXG4gICAgICovXG4gICAgZmVhdHVyZVZhbHVlcz86IEZlYXR1cmVWYWx1ZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbcmFuZ2VdXG4gICAgICovXG4gICAgcmFuZ2U/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVdXG4gICAgICovXG4gICAgdHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENsYXNzaWZpY2F0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDbGFzc2lmaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZlYXR1cmVbXX0gW2ZlYXR1cmVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVzPzogRmVhdHVyZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZ1dHVyZVN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGdXR1cmVTdG9jayB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RhdGVdXG4gICAgICovXG4gICAgZGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkRGF0ZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0b2NrfSBbc3RvY2tdXG4gICAgICovXG4gICAgc3RvY2s/OiBTdG9jaztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaWNlUmFuZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByaWNlUmFuZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbbWF4UHJpY2VdXG4gICAgICovXG4gICAgbWF4UHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW21pblByaWNlXVxuICAgICAqL1xuICAgIG1pblByaWNlPzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0UmVmZXJlbmNlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0UmVmZXJlbmNlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbcHJlc2VsZWN0ZWRdXG4gICAgICovXG4gICAgcHJlc2VsZWN0ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JlZmVyZW5jZVR5cGVdXG4gICAgICovXG4gICAgcmVmZXJlbmNlVHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0fSBbdGFyZ2V0XVxuICAgICAqL1xuICAgIHRhcmdldD86IFByb2R1Y3Q7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBMYW5ndWFnZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFthY3RpdmVdXG4gICAgICovXG4gICAgYWN0aXZlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlXVxuICAgICAqL1xuICAgIGlzb2NvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hdGl2ZU5hbWVdXG4gICAgICovXG4gICAgbmF0aXZlTmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1cnJlbmN5fSBbY3VycmVuY3ldXG4gICAgICovXG4gICAgY3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjdXN0b21lcklkXVxuICAgICAqL1xuICAgIGN1c3RvbWVySWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RlYWN0aXZhdGlvbkRhdGVdXG4gICAgICovXG4gICAgZGVhY3RpdmF0aW9uRGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlZmF1bHRBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlZmF1bHRBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkaXNwbGF5VWlkXVxuICAgICAqL1xuICAgIGRpc3BsYXlVaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmlyc3ROYW1lXVxuICAgICAqL1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtMYW5ndWFnZX0gW2xhbmd1YWdlXVxuICAgICAqL1xuICAgIGxhbmd1YWdlPzogTGFuZ3VhZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbGFzdE5hbWVdXG4gICAgICovXG4gICAgbGFzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlQ29kZV1cbiAgICAgKi9cbiAgICB0aXRsZUNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJldmlldy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmV2aWV3IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthbGlhc11cbiAgICAgKi9cbiAgICBhbGlhcz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb21tZW50XVxuICAgICAqL1xuICAgIGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RhdGVdXG4gICAgICovXG4gICAgZGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaGVhZGxpbmVdXG4gICAgICovXG4gICAgaGVhZGxpbmU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VXNlcn0gW3ByaW5jaXBhbF1cbiAgICAgKi9cbiAgICBwcmluY2lwYWw/OiBVc2VyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3JhdGluZ11cbiAgICAgKi9cbiAgICByYXRpbmc/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50Q2F0ZWdvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRDYXRlZ29yeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2hhc0ltYWdlXVxuICAgICAqL1xuICAgIGhhc0ltYWdlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcHJpb3JpdHldXG4gICAgICovXG4gICAgcHJpb3JpdHk/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50VmFsdWVDYXRlZ29yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudFZhbHVlQ2F0ZWdvcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzZXF1ZW5jZV1cbiAgICAgKi9cbiAgICBzZXF1ZW5jZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50Q2F0ZWdvcnlbXX0gW3N1cGVyQ2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBzdXBlckNhdGVnb3JpZXM/OiBWYXJpYW50Q2F0ZWdvcnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZhcmlhbnRNYXRyaXhFbGVtZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50TWF0cml4RWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE1hdHJpeEVsZW1lbnRbXX0gW2VsZW1lbnRzXVxuICAgICAqL1xuICAgIGVsZW1lbnRzPzogVmFyaWFudE1hdHJpeEVsZW1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbaXNMZWFmXVxuICAgICAqL1xuICAgIGlzTGVhZj86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudENhdGVnb3J5fSBbcGFyZW50VmFyaWFudENhdGVnb3J5XVxuICAgICAqL1xuICAgIHBhcmVudFZhcmlhbnRDYXRlZ29yeT86IFZhcmlhbnRDYXRlZ29yeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9ufSBbdmFyaWFudE9wdGlvbl1cbiAgICAgKi9cbiAgICB2YXJpYW50T3B0aW9uPzogVmFyaWFudE9wdGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50VmFsdWVDYXRlZ29yeX0gW3ZhcmlhbnRWYWx1ZUNhdGVnb3J5XVxuICAgICAqL1xuICAgIHZhcmlhbnRWYWx1ZUNhdGVnb3J5PzogVmFyaWFudFZhbHVlQ2F0ZWdvcnk7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9kdWN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbYXZhaWxhYmxlRm9yUGlja3VwXVxuICAgICAqL1xuICAgIGF2YWlsYWJsZUZvclBpY2t1cD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYXZlcmFnZVJhdGluZ11cbiAgICAgKi9cbiAgICBhdmVyYWdlUmF0aW5nPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Jhc2VPcHRpb25bXX0gW2Jhc2VPcHRpb25zXVxuICAgICAqL1xuICAgIGJhc2VPcHRpb25zPzogQmFzZU9wdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Jhc2VQcm9kdWN0XVxuICAgICAqL1xuICAgIGJhc2VQcm9kdWN0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhdGVnb3J5W119IFtjYXRlZ29yaWVzXVxuICAgICAqL1xuICAgIGNhdGVnb3JpZXM/OiBDYXRlZ29yeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NsYXNzaWZpY2F0aW9uW119IFtjbGFzc2lmaWNhdGlvbnNdXG4gICAgICovXG4gICAgY2xhc3NpZmljYXRpb25zPzogQ2xhc3NpZmljYXRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RnV0dXJlU3RvY2tbXX0gW2Z1dHVyZVN0b2Nrc11cbiAgICAgKi9cbiAgICBmdXR1cmVTdG9ja3M/OiBGdXR1cmVTdG9ja1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlW119IFtpbWFnZXNdXG4gICAgICovXG4gICAgaW1hZ2VzPzogSW1hZ2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFttYW51ZmFjdHVyZXJdXG4gICAgICovXG4gICAgbWFudWZhY3R1cmVyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFttdWx0aWRpbWVuc2lvbmFsXVxuICAgICAqL1xuICAgIG11bHRpZGltZW5zaW9uYWw/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtudW1iZXJPZlJldmlld3NdXG4gICAgICovXG4gICAgbnVtYmVyT2ZSZXZpZXdzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvbltdfSBbcG90ZW50aWFsUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwb3RlbnRpYWxQcm9tb3Rpb25zPzogUHJvbW90aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcmljZV1cbiAgICAgKi9cbiAgICBwcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlUmFuZ2V9IFtwcmljZVJhbmdlXVxuICAgICAqL1xuICAgIHByaWNlUmFuZ2U/OiBQcmljZVJhbmdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RSZWZlcmVuY2VbXX0gW3Byb2R1Y3RSZWZlcmVuY2VzXVxuICAgICAqL1xuICAgIHByb2R1Y3RSZWZlcmVuY2VzPzogUHJvZHVjdFJlZmVyZW5jZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtwdXJjaGFzYWJsZV1cbiAgICAgKi9cbiAgICBwdXJjaGFzYWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UmV2aWV3W119IFtyZXZpZXdzXVxuICAgICAqL1xuICAgIHJldmlld3M/OiBSZXZpZXdbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrXVxuICAgICAqL1xuICAgIHN0b2NrPzogU3RvY2s7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3VtbWFyeV1cbiAgICAgKi9cbiAgICBzdW1tYXJ5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE1hdHJpeEVsZW1lbnRbXX0gW3ZhcmlhbnRNYXRyaXhdXG4gICAgICovXG4gICAgdmFyaWFudE1hdHJpeD86IFZhcmlhbnRNYXRyaXhFbGVtZW50W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbltdfSBbdmFyaWFudE9wdGlvbnNdXG4gICAgICovXG4gICAgdmFyaWFudE9wdGlvbnM/OiBWYXJpYW50T3B0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFyaWFudFR5cGVdXG4gICAgICovXG4gICAgdmFyaWFudFR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2VbXX0gW3ZvbHVtZVByaWNlc11cbiAgICAgKi9cbiAgICB2b2x1bWVQcmljZXM/OiBQcmljZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt2b2x1bWVQcmljZXNGbGFnXVxuICAgICAqL1xuICAgIHZvbHVtZVByaWNlc0ZsYWc/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJFbnRyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJFbnRyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtiYXNlUHJpY2VdXG4gICAgICovXG4gICAgYmFzZVByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZX0gW2RlbGl2ZXJ5UG9pbnRPZlNlcnZpY2VdXG4gICAgICovXG4gICAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2VudHJ5TnVtYmVyXVxuICAgICAqL1xuICAgIGVudHJ5TnVtYmVyPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3R9IFtwcm9kdWN0XVxuICAgICAqL1xuICAgIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3VwZGF0ZWFibGVdXG4gICAgICovXG4gICAgdXBkYXRlYWJsZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBEZWxpdmVyeU9yZGVyRW50cnlHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlPcmRlckVudHJ5R3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWxpdmVyeUFkZHJlc3NdXG4gICAgICovXG4gICAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGF5bWVudERldGFpbHMuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnREZXRhaWxzIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFthY2NvdW50SG9sZGVyTmFtZV1cbiAgICAgKi9cbiAgICBhY2NvdW50SG9sZGVyTmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbYmlsbGluZ0FkZHJlc3NdXG4gICAgICovXG4gICAgYmlsbGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhcmROdW1iZXJdXG4gICAgICovXG4gICAgY2FyZE51bWJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJkVHlwZX0gW2NhcmRUeXBlXVxuICAgICAqL1xuICAgIGNhcmRUeXBlPzogQ2FyZFR5cGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3ZuXVxuICAgICAqL1xuICAgIGN2bj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZGVmYXVsdFBheW1lbnRdXG4gICAgICovXG4gICAgZGVmYXVsdFBheW1lbnQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2V4cGlyeU1vbnRoXVxuICAgICAqL1xuICAgIGV4cGlyeU1vbnRoPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2V4cGlyeVllYXJdXG4gICAgICovXG4gICAgZXhwaXJ5WWVhcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc3N1ZU51bWJlcl1cbiAgICAgKi9cbiAgICBpc3N1ZU51bWJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2F2ZWRdXG4gICAgICovXG4gICAgc2F2ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXJ0TW9udGhdXG4gICAgICovXG4gICAgc3RhcnRNb250aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGFydFllYXJdXG4gICAgICovXG4gICAgc3RhcnRZZWFyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1YnNjcmlwdGlvbklkXVxuICAgICAqL1xuICAgIHN1YnNjcmlwdGlvbklkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGlja3VwT3JkZXJFbnRyeUdyb3VwLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQaWNrdXBPcmRlckVudHJ5R3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlfSBbZGVsaXZlcnlQb2ludE9mU2VydmljZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlPzogUG9pbnRPZlNlcnZpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGlzdGFuY2VdXG4gICAgICovXG4gICAgZGlzdGFuY2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaW5jaXBhbC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJpbmNpcGFsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZE9yZGVyUHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkUHJvZHVjdFByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Vm91Y2hlcltdfSBbYXBwbGllZFZvdWNoZXJzXVxuICAgICAqL1xuICAgIGFwcGxpZWRWb3VjaGVycz86IFZvdWNoZXJbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2FsY3VsYXRlZF1cbiAgICAgKi9cbiAgICBjYWxjdWxhdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlbGl2ZXJ5QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2RlbGl2ZXJ5SXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdfSBbZGVsaXZlcnlPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBPcmRlckVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2V4cGlyYXRpb25UaW1lXVxuICAgICAqL1xuICAgIGV4cGlyYXRpb25UaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtndWlkXVxuICAgICAqL1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtuZXRdXG4gICAgICovXG4gICAgbmV0PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW29yZGVyRGlzY291bnRzXVxuICAgICAqL1xuICAgIG9yZGVyRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudERldGFpbHN9IFtwYXltZW50SW5mb11cbiAgICAgKi9cbiAgICBwYXltZW50SW5mbz86IFBheW1lbnREZXRhaWxzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3BpY2t1cEl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgcGlja3VwSXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQaWNrdXBPcmRlckVudHJ5R3JvdXBbXX0gW3BpY2t1cE9yZGVyR3JvdXBzXVxuICAgICAqL1xuICAgIHBpY2t1cE9yZGVyR3JvdXBzPzogUGlja3VwT3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwb3RlbnRpYWxPcmRlclByb21vdGlvbnNdXG4gICAgICovXG4gICAgcG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zPzogUHJvbW90aW9uUmVzdWx0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBwb3RlbnRpYWxQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcHJvZHVjdERpc2NvdW50c11cbiAgICAgKi9cbiAgICBwcm9kdWN0RGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3NhdmVUaW1lXVxuICAgICAqL1xuICAgIHNhdmVUaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFtzYXZlZEJ5XVxuICAgICAqL1xuICAgIHNhdmVkQnk/OiBQcmluY2lwYWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2l0ZV1cbiAgICAgKi9cbiAgICBzaXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlXVxuICAgICAqL1xuICAgIHN0b3JlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbc3ViVG90YWxdXG4gICAgICovXG4gICAgc3ViVG90YWw/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsRGlzY291bnRzXVxuICAgICAqL1xuICAgIHRvdGFsRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxJdGVtc11cbiAgICAgKi9cbiAgICB0b3RhbEl0ZW1zPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxUYXhdXG4gICAgICovXG4gICAgdG90YWxUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFVuaXRDb3VudF1cbiAgICAgKi9cbiAgICB0b3RhbFVuaXRDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFt1c2VyXVxuICAgICAqL1xuICAgIHVzZXI/OiBQcmluY2lwYWw7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJ0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FydExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcnRbXX0gW2NhcnRzXVxuICAgICAqL1xuICAgIGNhcnRzPzogQ2FydFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FydE1vZGlmaWNhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FydE1vZGlmaWNhdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlbGl2ZXJ5TW9kZUNoYW5nZWRdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2RlQ2hhbmdlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeX0gW2VudHJ5XVxuICAgICAqL1xuICAgIGVudHJ5PzogT3JkZXJFbnRyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eUFkZGVkXVxuICAgICAqL1xuICAgIHF1YW50aXR5QWRkZWQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzQ29kZV1cbiAgICAgKi9cbiAgICBzdGF0dXNDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c01lc3NhZ2VdXG4gICAgICovXG4gICAgc3RhdHVzTWVzc2FnZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGVnb3J5SGllcmFyY2h5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRlZ29yeUhpZXJhcmNoeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeUhpZXJhcmNoeVtdfSBbc3ViY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBzdWJjYXRlZ29yaWVzPzogQ2F0ZWdvcnlIaWVyYXJjaHlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZ1ZlcnNpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGFsb2dWZXJzaW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeUhpZXJhcmNoeVtdfSBbY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlIaWVyYXJjaHlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpZF1cbiAgICAgKi9cbiAgICBpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbbGFzdE1vZGlmaWVkXVxuICAgICAqL1xuICAgIGxhc3RNb2RpZmllZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRhbG9nLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRhbG9nVmVyc2lvbltdfSBbY2F0YWxvZ1ZlcnNpb25zXVxuICAgICAqL1xuICAgIGNhdGFsb2dWZXJzaW9ucz86IENhdGFsb2dWZXJzaW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZ0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGFsb2dMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRhbG9nW119IFtjYXRhbG9nc11cbiAgICAgKi9cbiAgICBjYXRhbG9ncz86IENhdGFsb2dbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbXBvbmVudElETGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50SURMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX0gW2lkTGlzdF1cbiAgICAgKi9cbiAgICBpZExpc3Q/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnNpZ25tZW50RW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50RW50cnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnl9IFtvcmRlckVudHJ5XVxuICAgICAqL1xuICAgIG9yZGVyRW50cnk/OiBPcmRlckVudHJ5O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NoaXBwZWRRdWFudGl0eV1cbiAgICAgKi9cbiAgICBzaGlwcGVkUXVhbnRpdHk/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb25zaWdubWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2lnbm1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZX0gW2RlbGl2ZXJ5UG9pbnRPZlNlcnZpY2VdXG4gICAgICovXG4gICAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnNpZ25tZW50RW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IENvbnNpZ25tZW50RW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbc2hpcHBpbmdBZGRyZXNzXVxuICAgICAqL1xuICAgIHNoaXBwaW5nQWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbc3RhdHVzRGF0ZV1cbiAgICAgKi9cbiAgICBzdGF0dXNEYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0cmFja2luZ0lEXVxuICAgICAqL1xuICAgIHRyYWNraW5nSUQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb3VudHJ5TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ291bnRyeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvdW50cnlbXX0gW2NvdW50cmllc11cbiAgICAgKi9cbiAgICBjb3VudHJpZXM/OiBDb3VudHJ5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDdXJyZW5jeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEN1cnJlbmN5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q3VycmVuY3lbXX0gW2N1cnJlbmNpZXNdXG4gICAgICovXG4gICAgY3VycmVuY2llcz86IEN1cnJlbmN5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBEZWxpdmVyeU1vZGVMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBEZWxpdmVyeU1vZGVMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU1vZGVbXX0gW2RlbGl2ZXJ5TW9kZXNdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2Rlcz86IERlbGl2ZXJ5TW9kZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmFjZXRWYWx1ZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmFjZXRWYWx1ZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbY291bnRdXG4gICAgICovXG4gICAgY291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFN0YXRlfSBbcXVlcnldXG4gICAgICovXG4gICAgcXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2VsZWN0ZWRdXG4gICAgICovXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmFjZXQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZhY2V0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2F0ZWdvcnldXG4gICAgICovXG4gICAgY2F0ZWdvcnk/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFttdWx0aVNlbGVjdF1cbiAgICAgKi9cbiAgICBtdWx0aVNlbGVjdD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ByaW9yaXR5XVxuICAgICAqL1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZhY2V0VmFsdWVbXX0gW3RvcFZhbHVlc11cbiAgICAgKi9cbiAgICB0b3BWYWx1ZXM/OiBGYWNldFZhbHVlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmFjZXRWYWx1ZVtdfSBbdmFsdWVzXVxuICAgICAqL1xuICAgIHZhbHVlcz86IEZhY2V0VmFsdWVbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdmlzaWJsZV1cbiAgICAgKi9cbiAgICB2aXNpYmxlPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIExhbmd1YWdlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGFuZ3VhZ2VMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtMYW5ndWFnZVtdfSBbbGFuZ3VhZ2VzXVxuICAgICAqL1xuICAgIGxhbmd1YWdlcz86IExhbmd1YWdlW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYWdpbmF0aW9uLlxuICAgKiBQYWdpbmF0aW9uIGluZm9cbiAgICpcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbY291bnRdIE51bWJlciBvZiBlbGVtZW50cyBvbiB0aGlzIHBhZ2VcbiAgICAgKi9cbiAgICBjb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwYWdlXSBDdXJyZW50IHBhZ2UgbnVtYmVyXG4gICAgICovXG4gICAgcGFnZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbENvdW50XSBUb3RhbCBudW1iZXIgb2YgZWxlbWVudHNcbiAgICAgKi9cbiAgICB0b3RhbENvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUGFnZXNdIFRvdGFsIG51bWJlciBvZiBwYWdlc1xuICAgICAqL1xuICAgIHRvdGFsUGFnZXM/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTb3J0LlxuICAgKiBTb3J0IG9wdGlvblxuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTb3J0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbYXNjXVxuICAgICAqL1xuICAgIGFzYz86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTGlzdEFkYXB0ZWRDb21wb25lbnRzLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBMaXN0QWRhcHRlZENvbXBvbmVudHMge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2FueVtdfSBbY29tcG9uZW50c11cbiAgICAgKi9cbiAgICBjb21wb25lbnRzPzogYW55W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbn0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBNZW1iZXJMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBNZW1iZXJMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWxbXX0gW21lbWJlcnNdXG4gICAgICovXG4gICAgbWVtYmVycz86IFByaW5jaXBhbFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJFbnRyeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyRW50cnlMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFtvcmRlckVudHJpZXNdXG4gICAgICovXG4gICAgb3JkZXJFbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJIaXN0b3J5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckhpc3Rvcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtndWlkXVxuICAgICAqL1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3BsYWNlZF1cbiAgICAgKi9cbiAgICBwbGFjZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c11cbiAgICAgKi9cbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzRGlzcGxheV1cbiAgICAgKi9cbiAgICBzdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxdXG4gICAgICovXG4gICAgdG90YWw/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBhZ2luYXRpb25Nb2RlbC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGFnaW5hdGlvbk1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtjdXJyZW50UGFnZV1cbiAgICAgKi9cbiAgICBjdXJyZW50UGFnZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwYWdlU2l6ZV1cbiAgICAgKi9cbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzb3J0XVxuICAgICAqL1xuICAgIHNvcnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxQYWdlc11cbiAgICAgKi9cbiAgICB0b3RhbFBhZ2VzPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUmVzdWx0c11cbiAgICAgKi9cbiAgICB0b3RhbFJlc3VsdHM/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTb3J0TW9kZWwuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNvcnRNb2RlbCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbc2VsZWN0ZWRdXG4gICAgICovXG4gICAgc2VsZWN0ZWQ/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJIaXN0b3J5TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJIaXN0b3J5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJIaXN0b3J5W119IFtvcmRlcnNdXG4gICAgICovXG4gICAgb3JkZXJzPzogT3JkZXJIaXN0b3J5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtiYXNlU2l0ZUlkXVxuICAgICAqL1xuICAgIGJhc2VTaXRlSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c11cbiAgICAgKi9cbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRbXX0gW29yZGVyU3RhdHVzVXBkYXRlRWxlbWVudHNdXG4gICAgICovXG4gICAgb3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50cz86IE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW2FwcGxpZWRPcmRlclByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZvdWNoZXJbXX0gW2FwcGxpZWRWb3VjaGVyc11cbiAgICAgKi9cbiAgICBhcHBsaWVkVm91Y2hlcnM/OiBWb3VjaGVyW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NhbGN1bGF0ZWRdXG4gICAgICovXG4gICAgY2FsY3VsYXRlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnNpZ25tZW50W119IFtjb25zaWdubWVudHNdXG4gICAgICovXG4gICAgY29uc2lnbm1lbnRzPzogQ29uc2lnbm1lbnRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbY3JlYXRlZF1cbiAgICAgKi9cbiAgICBjcmVhdGVkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbZGVsaXZlcnlBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5QWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtkZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZGVsaXZlcnlJdGVtc1F1YW50aXR5XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5SXRlbXNRdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU1vZGV9IFtkZWxpdmVyeU1vZGVdXG4gICAgICovXG4gICAgZGVsaXZlcnlNb2RlPzogRGVsaXZlcnlNb2RlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW119IFtkZWxpdmVyeU9yZGVyR3JvdXBzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5T3JkZXJHcm91cHM/OiBEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2RlbGl2ZXJ5U3RhdHVzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5U3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2RlbGl2ZXJ5U3RhdHVzRGlzcGxheV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeVN0YXR1c0Rpc3BsYXk/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtndWVzdEN1c3RvbWVyXVxuICAgICAqL1xuICAgIGd1ZXN0Q3VzdG9tZXI/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2d1aWRdXG4gICAgICovXG4gICAgZ3VpZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbmV0XVxuICAgICAqL1xuICAgIG5ldD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtvcmRlckRpc2NvdW50c11cbiAgICAgKi9cbiAgICBvcmRlckRpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BheW1lbnREZXRhaWxzfSBbcGF5bWVudEluZm9dXG4gICAgICovXG4gICAgcGF5bWVudEluZm8/OiBQYXltZW50RGV0YWlscztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwaWNrdXBJdGVtc1F1YW50aXR5XVxuICAgICAqL1xuICAgIHBpY2t1cEl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGlja3VwT3JkZXJFbnRyeUdyb3VwW119IFtwaWNrdXBPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBwaWNrdXBPcmRlckdyb3Vwcz86IFBpY2t1cE9yZGVyRW50cnlHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcHJvZHVjdERpc2NvdW50c11cbiAgICAgKi9cbiAgICBwcm9kdWN0RGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2l0ZV1cbiAgICAgKi9cbiAgICBzaXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c11cbiAgICAgKi9cbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzRGlzcGxheV1cbiAgICAgKi9cbiAgICBzdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlXVxuICAgICAqL1xuICAgIHN0b3JlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbc3ViVG90YWxdXG4gICAgICovXG4gICAgc3ViVG90YWw/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsRGlzY291bnRzXVxuICAgICAqL1xuICAgIHRvdGFsRGlzY291bnRzPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxJdGVtc11cbiAgICAgKi9cbiAgICB0b3RhbEl0ZW1zPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZV1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlV2l0aFRheF1cbiAgICAgKi9cbiAgICB0b3RhbFByaWNlV2l0aFRheD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxUYXhdXG4gICAgICovXG4gICAgdG90YWxUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5W119IFt1bmNvbnNpZ25lZEVudHJpZXNdXG4gICAgICovXG4gICAgdW5jb25zaWduZWRFbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaW5jaXBhbH0gW3VzZXJdXG4gICAgICovXG4gICAgdXNlcj86IFByaW5jaXBhbDtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJldHVyblJlcXVlc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJldHVyblJlcXVlc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjYW5jZWxsYWJsZV1cbiAgICAgKi9cbiAgICBjYW5jZWxsYWJsZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtjcmVhdGlvblRpbWVdXG4gICAgICovXG4gICAgY3JlYXRpb25UaW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2RlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtvcmRlcn0gW29yZGVyXVxuICAgICAqL1xuICAgIG9yZGVyPzogT3JkZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3JlZnVuZERlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICByZWZ1bmREZWxpdmVyeUNvc3Q/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1JldHVyblJlcXVlc3RFbnRyeVtdfSBbcmV0dXJuRW50cmllc11cbiAgICAgKi9cbiAgICByZXR1cm5FbnRyaWVzPzogUmV0dXJuUmVxdWVzdEVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcmV0dXJuTGFiZWxEb3dubG9hZFVybF1cbiAgICAgKi9cbiAgICByZXR1cm5MYWJlbERvd25sb2FkVXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JtYV1cbiAgICAgKi9cbiAgICBybWE/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhdHVzXVxuICAgICAqL1xuICAgIHN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3N1YlRvdGFsXVxuICAgICAqL1xuICAgIHN1YlRvdGFsPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbFByaWNlXVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2U/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJldHVyblJlcXVlc3RFbnRyeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUmV0dXJuUmVxdWVzdEVudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5fSBbb3JkZXJFbnRyeV1cbiAgICAgKi9cbiAgICBvcmRlckVudHJ5PzogT3JkZXJFbnRyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtleHBlY3RlZFF1YW50aXR5XVxuICAgICAqL1xuICAgIGV4cGVjdGVkUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtyZWZ1bmRBbW91bnRdXG4gICAgICovXG4gICAgcmVmdW5kQW1vdW50PzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYXltZW50RGV0YWlsc0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnREZXRhaWxzTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudERldGFpbHNbXX0gW3BheW1lbnRzXVxuICAgICAqL1xuICAgIHBheW1lbnRzPzogUGF5bWVudERldGFpbHNbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBvaW50T2ZTZXJ2aWNlU3RvY2suXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBvaW50T2ZTZXJ2aWNlU3RvY2sge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFthZGRyZXNzXVxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rpc3BsYXlOYW1lXVxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2Rpc3RhbmNlS21dXG4gICAgICovXG4gICAgZGlzdGFuY2VLbT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHt7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9fSBbZmVhdHVyZXNdXG4gICAgICovXG4gICAgZmVhdHVyZXM/OiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERpc3RhbmNlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERpc3RhbmNlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0dlb1BvaW50fSBbZ2VvUG9pbnRdXG4gICAgICovXG4gICAgZ2VvUG9pbnQ/OiBHZW9Qb2ludDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW21hcEljb25dXG4gICAgICovXG4gICAgbWFwSWNvbj86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcGVuaW5nU2NoZWR1bGV9IFtvcGVuaW5nSG91cnNdXG4gICAgICovXG4gICAgb3BlbmluZ0hvdXJzPzogT3BlbmluZ1NjaGVkdWxlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0b2NrfSBbc3RvY2tJbmZvXVxuICAgICAqL1xuICAgIHN0b2NrSW5mbz86IFN0b2NrO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlQ29udGVudF1cbiAgICAgKi9cbiAgICBzdG9yZUNvbnRlbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2VbXX0gW3N0b3JlSW1hZ2VzXVxuICAgICAqL1xuICAgIHN0b3JlSW1hZ2VzPzogSW1hZ2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2dJZF1cbiAgICAgKi9cbiAgICBjYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2F0YWxvZ1ZlcnNpb25dXG4gICAgICovXG4gICAgY2F0YWxvZ1ZlcnNpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50W119IFtwcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRzXVxuICAgICAqL1xuICAgIHByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudHM/OiBQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2F0YWxvZ11cbiAgICAgKi9cbiAgICBjYXRhbG9nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2N1cnJlbnRQYWdlXVxuICAgICAqL1xuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RbXX0gW3Byb2R1Y3RzXVxuICAgICAqL1xuICAgIHByb2R1Y3RzPzogUHJvZHVjdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUGFnZUNvdW50XVxuICAgICAqL1xuICAgIHRvdGFsUGFnZUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUHJvZHVjdENvdW50XVxuICAgICAqL1xuICAgIHRvdGFsUHJvZHVjdENvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZlcnNpb25dXG4gICAgICovXG4gICAgdmVyc2lvbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RSZWZlcmVuY2VMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0UmVmZXJlbmNlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdFJlZmVyZW5jZVtdfSBbcmVmZXJlbmNlc11cbiAgICAgKi9cbiAgICByZWZlcmVuY2VzPzogUHJvZHVjdFJlZmVyZW5jZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3BlbGxpbmdTdWdnZXN0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTcGVsbGluZ1N1Z2dlc3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3F1ZXJ5XVxuICAgICAqL1xuICAgIHF1ZXJ5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1Z2dlc3Rpb25dXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RTZWFyY2hQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0U2VhcmNoUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QnJlYWRjcnVtYltdfSBbYnJlYWRjcnVtYnNdXG4gICAgICovXG4gICAgYnJlYWRjcnVtYnM/OiBCcmVhZGNydW1iW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2F0ZWdvcnlDb2RlXVxuICAgICAqL1xuICAgIGNhdGVnb3J5Q29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW2N1cnJlbnRRdWVyeV1cbiAgICAgKi9cbiAgICBjdXJyZW50UXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGYWNldFtdfSBbZmFjZXRzXVxuICAgICAqL1xuICAgIGZhY2V0cz86IEZhY2V0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZnJlZVRleHRTZWFyY2hdXG4gICAgICovXG4gICAgZnJlZVRleHRTZWFyY2g/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBba2V5d29yZFJlZGlyZWN0VXJsXVxuICAgICAqL1xuICAgIGtleXdvcmRSZWRpcmVjdFVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9uTW9kZWx9IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdFtdfSBbcHJvZHVjdHNdXG4gICAgICovXG4gICAgcHJvZHVjdHM/OiBQcm9kdWN0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydE1vZGVsW119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NwZWxsaW5nU3VnZ2VzdGlvbn0gW3NwZWxsaW5nU3VnZ2VzdGlvbl1cbiAgICAgKi9cbiAgICBzcGVsbGluZ1N1Z2dlc3Rpb24/OiBTcGVsbGluZ1N1Z2dlc3Rpb247XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25MaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25MaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25bXX0gW3Byb21vdGlvbnNdXG4gICAgICovXG4gICAgcHJvbW90aW9ucz86IFByb21vdGlvbltdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uUmVzdWx0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdWx0TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJldmlld0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJldmlld0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Jldmlld1tdfSBbcmV2aWV3c11cbiAgICAgKi9cbiAgICByZXZpZXdzPzogUmV2aWV3W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTYXZlQ2FydFJlc3VsdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2F2ZUNhcnRSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcnR9IFtzYXZlZENhcnREYXRhXVxuICAgICAqL1xuICAgIHNhdmVkQ2FydERhdGE/OiBDYXJ0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3RvcmVGaW5kZXJTZWFyY2hQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUZpbmRlclNlYXJjaFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kRWFzdExvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZEVhc3RMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmROb3J0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kTm9ydGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFNvdXRoTGF0aXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRTb3V0aExhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kV2VzdExvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZFdlc3RMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbG9jYXRpb25UZXh0XVxuICAgICAqL1xuICAgIGxvY2F0aW9uVGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9uTW9kZWx9IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydE1vZGVsW119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NvdXJjZUxhdGl0dWRlXVxuICAgICAqL1xuICAgIHNvdXJjZUxhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NvdXJjZUxvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2VbXX0gW3N0b3Jlc11cbiAgICAgKi9cbiAgICBzdG9yZXM/OiBQb2ludE9mU2VydmljZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3RvcmVGaW5kZXJTdG9ja1NlYXJjaFBhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFN0b3JlRmluZGVyU3RvY2tTZWFyY2hQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZEVhc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRFYXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kTm9ydGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZE5vcnRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRTb3V0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kU291dGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFdlc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRXZXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xvY2F0aW9uVGV4dF1cbiAgICAgKi9cbiAgICBsb2NhdGlvblRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3R9IFtwcm9kdWN0XVxuICAgICAqL1xuICAgIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMb25naXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlU3RvY2tbXX0gW3N0b3Jlc11cbiAgICAgKi9cbiAgICBzdG9yZXM/OiBQb2ludE9mU2VydmljZVN0b2NrW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdWdnZXN0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN1Z2dlc3Rpb25MaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3VnZ2VzdGlvbltdfSBbc3VnZ2VzdGlvbnNdXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbnM/OiBTdWdnZXN0aW9uW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBUaXRsZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGl0bGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBUaXRsZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRpdGxlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGl0bGVbXX0gW3RpdGxlc11cbiAgICAgKi9cbiAgICB0aXRsZXM/OiBUaXRsZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVXNlckdyb3VwLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBVc2VyR3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaW5jaXBhbFtdfSBbbWVtYmVyc11cbiAgICAgKi9cbiAgICBtZW1iZXJzPzogUHJpbmNpcGFsW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWVtYmVyc0NvdW50XVxuICAgICAqL1xuICAgIG1lbWJlcnNDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VXNlckdyb3VwW119IFtzdWJHcm91cHNdXG4gICAgICovXG4gICAgc3ViR3JvdXBzPzogVXNlckdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXJHcm91cExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFVzZXJHcm91cExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2N1cnJlbnRQYWdlXVxuICAgICAqL1xuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW251bWJlck9mUGFnZXNdXG4gICAgICovXG4gICAgbnVtYmVyT2ZQYWdlcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwYWdlU2l6ZV1cbiAgICAgKi9cbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbE51bWJlcl1cbiAgICAgKi9cbiAgICB0b3RhbE51bWJlcj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtVc2VyR3JvdXBbXX0gW3VzZXJHcm91cHNdXG4gICAgICovXG4gICAgdXNlckdyb3Vwcz86IFVzZXJHcm91cFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVXNlclNpZ25VcC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXNlclNpZ25VcCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmlyc3ROYW1lXVxuICAgICAqL1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsYXN0TmFtZV1cbiAgICAgKi9cbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwYXNzd29yZF1cbiAgICAgKi9cbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZUNvZGVdXG4gICAgICovXG4gICAgdGl0bGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFN0b3JlQ291bnQge1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIGlzb0NvZGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUNvdW50TGlzdCB7XG4gICAgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQ/OiBTdG9yZUNvdW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWb3VjaGVyTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZvdWNoZXJbXX0gW3ZvdWNoZXJzXVxuICAgICAqL1xuICAgIHZvdWNoZXJzPzogVm91Y2hlcltdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBQcmljZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQlVZJywgJ0ZST00nXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IFByaWNlVHlwZSA9IDxQcmljZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBQcmljZVR5cGUge1xuICAgIEJVWSA9ICdCVVknLFxuICAgIEZST00gPSAnRlJPTScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEltYWdlVHlwZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdQUklNQVJZJywgJ0dBTExFUlknXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEltYWdlVHlwZSA9IDxJbWFnZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBJbWFnZVR5cGUge1xuICAgIFBSSU1BUlkgPSAnUFJJTUFSWScsXG4gICAgR0FMTEVSWSA9ICdHQUxMRVJZJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzID0gPEZpZWxkcz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkcyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEgPSA8RmllbGRzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyID0gPEZpZWxkczI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMyA9IDxGaWVsZHMzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQgPSA8RmllbGRzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1ID0gPEZpZWxkczU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNiA9IDxGaWVsZHM2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgUGFnZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQ29udGVudFBhZ2UnLCAnUHJvZHVjdFBhZ2UnLCAnQ2F0ZWdvcnlQYWdlJyxcbiAgICogJ0NhdGFsb2dQYWdlJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBQYWdlVHlwZSA9IDxQYWdlVHlwZT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFBhZ2VUeXBlIHtcbiAgICBDT05URU5UX1BBR0UgPSAnQ29udGVudFBhZ2UnLFxuICAgIFBST0RVQ1RfUEFHRSA9ICdQcm9kdWN0UGFnZScsXG4gICAgQ0FURUdPUllfUEFHRSA9ICdDYXRlZ29yeVBhZ2UnLFxuICAgIENBVEFMT0dfUEFHRSA9ICdDYXRhbG9nUGFnZScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM3ID0gPEZpZWxkczc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzOCA9IDxGaWVsZHM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczkgPSA8RmllbGRzOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTAgPSA8RmllbGRzMTA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxMSA9IDxGaWVsZHMxMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczExIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEyID0gPEZpZWxkczEyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTMgPSA8RmllbGRzMTM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNCA9IDxGaWVsZHMxND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE1ID0gPEZpZWxkczE1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTYgPSA8RmllbGRzMTY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgU29ydEVudW0uXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBTb3J0RW51bSA9IDxTb3J0RW51bT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFNvcnRFbnVtIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE3ID0gPEZpZWxkczE3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTggPSA8RmllbGRzMTg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxOSA9IDxGaWVsZHMxOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIwID0gPEZpZWxkczIwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjEgPSA8RmllbGRzMjE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMiA9IDxGaWVsZHMyMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIzID0gPEZpZWxkczIzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjQgPSA8RmllbGRzMjQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyNSA9IDxGaWVsZHMyNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI2ID0gPEZpZWxkczI2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjcgPSA8RmllbGRzMjc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyOCA9IDxGaWVsZHMyOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI5ID0gPEZpZWxkczI5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzAgPSA8RmllbGRzMzA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzMSA9IDxGaWVsZHMzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMyID0gPEZpZWxkczMyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzMgPSA8RmllbGRzMzM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNCA9IDxGaWVsZHMzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM1ID0gPEZpZWxkczM1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzYgPSA8RmllbGRzMzY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNyA9IDxGaWVsZHMzNz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM4ID0gPEZpZWxkczM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzkgPSA8RmllbGRzMzk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzOSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MCA9IDxGaWVsZHM0MD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0MS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQxID0gPEZpZWxkczQxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDIgPSA8RmllbGRzNDI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MyA9IDxGaWVsZHM0Mz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0NC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ0ID0gPEZpZWxkczQ0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDUgPSA8RmllbGRzNDU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0NSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NiA9IDxGaWVsZHM0Nj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0Ny5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ3ID0gPEZpZWxkczQ3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDggPSA8RmllbGRzNDg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0OCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0OSA9IDxGaWVsZHM0OT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1MC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUwID0gPEZpZWxkczUwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTEgPSA8RmllbGRzNTE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1MSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MiA9IDxGaWVsZHM1Mj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1My5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUzID0gPEZpZWxkczUzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTQgPSA8RmllbGRzNTQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1NSA9IDxGaWVsZHM1NT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1Ni5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU2ID0gPEZpZWxkczU2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTcgPSA8RmllbGRzNTc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1OCA9IDxGaWVsZHM1OD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1OS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU5ID0gPEZpZWxkczU5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczYwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNjAgPSA8RmllbGRzNjA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM2MCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNjEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM2MSA9IDxGaWVsZHM2MT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczYxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ2FsbCcsICdwcm9kdWN0JywgJ29yZGVyJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBUeXBlID0gPFR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBUeXBlIHtcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBQcm9kdWN0ID0gJ3Byb2R1Y3QnLFxuICAgIE9yZGVyID0gJ29yZGVyJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQW5vbnltb3VzQ29uc2VudCB7XG4gICAgdGVtcGxhdGVDb2RlPzogc3RyaW5nO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgY29uc2VudFN0YXRlPzogQ09OU0VOVF9TVEFUVVM7XG4gIH1cblxuICBleHBvcnQgZW51bSBDT05TRU5UX1NUQVRVUyB7XG4gICAgQU5PTllNT1VTX0NPTlNFTlRfR0lWRU4gPSAnR0lWRU4nLFxuICAgIEFOT05ZTU9VU19DT05TRU5UX1dJVEhEUkFXTiA9ICdXSVRIRFJBV04nLFxuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50VGVtcGxhdGUge1xuICAgIGlkPzogc3RyaW5nO1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgdmVyc2lvbj86IG51bWJlcjtcbiAgICBjdXJyZW50Q29uc2VudD86IENvbnNlbnQ7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIENvbnNlbnQge1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgY29uc2VudEdpdmVuRGF0ZT86IERhdGU7XG4gICAgY29uc2VudFdpdGhkcmF3bkRhdGU/OiBEYXRlO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50VGVtcGxhdGVMaXN0IHtcbiAgICBjb25zZW50VGVtcGxhdGVzPzogQ29uc2VudFRlbXBsYXRlW107XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIEJhc2VTaXRlcyB7XG4gICAgYmFzZVNpdGVzPzogQmFzZVNpdGVbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzZVNpdGUge1xuICAgIGNoYW5uZWw/OiBzdHJpbmc7XG4gICAgZGVmYXVsdExhbmd1YWdlPzogTGFuZ3VhZ2U7XG4gICAgZGVmYXVsdFByZXZpZXdDYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgZGVmYXVsdFByZXZpZXdDYXRlZ29yeUNvZGU/OiBzdHJpbmc7XG4gICAgZGVmYXVsdFByZXZpZXdQcm9kdWN0Q29kZT86IHN0cmluZztcbiAgICBsb2NhbGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB0aGVtZT86IHN0cmluZztcbiAgICB1aWQ/OiBzdHJpbmc7XG4gICAgc3RvcmVzPzogQmFzZVN0b3JlW107XG4gICAgdXJsUGF0dGVybnM/OiBzdHJpbmdbXTtcbiAgICB1cmxFbmNvZGluZ0F0dHJpYnV0ZXM/OiBzdHJpbmdbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQmFzZVN0b3JlIHtcbiAgICBjdXJyZW5jaWVzPzogQ3VycmVuY3lbXTtcbiAgICBkZWZhdWx0Q3VycmVuY3k/OiBDdXJyZW5jeTtcbiAgICBsYW5ndWFnZXM/OiBMYW5ndWFnZVtdO1xuICAgIGRlZmF1bHRMYW5ndWFnZT86IExhbmd1YWdlO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0SW50ZXJlc3RFbnRyeSB7XG4gICAgaW50ZXJlc3RUeXBlPzogTm90aWZpY2F0aW9uVHlwZTtcbiAgICBkYXRlQWRkZWQ/OiBzdHJpbmc7XG4gICAgZXhwaXJhdGlvbkRhdGU/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFByb2R1Y3RJbnRlcmVzdEVudHJ5UmVsYXRpb24ge1xuICAgIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICAgIHByb2R1Y3RJbnRlcmVzdEVudHJ5PzogUHJvZHVjdEludGVyZXN0RW50cnlbXTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEludGVyZXN0U2VhcmNoUmVzdWx0IHtcbiAgICByZXN1bHRzPzogUHJvZHVjdEludGVyZXN0RW50cnlSZWxhdGlvbltdO1xuICAgIHNvcnRzPzogU29ydFtdO1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICB9XG5cbiAgZXhwb3J0IGVudW0gTm90aWZpY2F0aW9uVHlwZSB7XG4gICAgQkFDS19JTl9TVE9DSyA9ICdCQUNLX0lOX1NUT0NLJyxcbiAgfVxufVxuIl19