/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
         * \@member {Date} [modifiedtime]
         * @type {?|undefined}
         */
        Component.prototype.modifiedtime;
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
})(Occ || (Occ = {}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib2NjLm1vZGVscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzcGFydGFjdXMvY29yZS8iLCJzb3VyY2VzIjpbInNyYy9vY2Mvb2NjLW1vZGVscy9vY2MubW9kZWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxNQUFNLEtBQVcsR0FBRyxDQXEzSG5CO0FBcjNIRCxXQUFpQixHQUFHOzs7Ozs7SUFLbEIsc0JBU0M7Ozs7Ozs7UUFMQywwQkFBaUI7Ozs7O1FBSWpCLHVCQUFjOzs7Ozs7O0lBT2hCLHFCQWlCQzs7Ozs7OztRQWJDLDRCQUFvQjs7Ozs7UUFJcEIseUJBQWlCOzs7OztRQUlqQiw4QkFBc0I7Ozs7O1FBSXRCLHNCQUFjOzs7Ozs7O0lBT2hCLHlCQUtDOzs7Ozs7O1FBREMsNkJBQW1COzs7Ozs7O0lBT3JCLHNCQXlFQzs7Ozs7OztRQXJFQyw4QkFBcUI7Ozs7O1FBSXJCLDBCQUFrQjs7Ozs7UUFJbEIsaUNBQXlCOzs7OztRQUl6Qix3QkFBZTs7Ozs7UUFJZiw0QkFBbUI7Ozs7O1FBSW5CLG1DQUEwQjs7Ozs7UUFJMUIscUJBQVk7Ozs7O1FBSVosMkJBQWtCOzs7OztRQUlsQix3QkFBZTs7Ozs7UUFJZix3QkFBZTs7Ozs7UUFJZix3QkFBZTs7Ozs7UUFJZiw2QkFBb0I7Ozs7O1FBSXBCLHlCQUFnQjs7Ozs7UUFJaEIsa0NBQTBCOzs7OztRQUkxQix3QkFBZTs7Ozs7UUFJZiw0QkFBbUI7Ozs7O1FBSW5CLHVCQUFjOzs7OztRQUlkLHVDQUErQjs7Ozs7OztJQU9qQywwQkFLQzs7Ozs7OztRQURDLGdDQUFzQjs7Ozs7Ozs7O0lBU3hCLHlCQXVCQzs7Ozs7OztRQW5CQyw2QkFBaUI7Ozs7OztRQUtqQiw0QkFBZ0I7Ozs7O1FBSWhCLDZCQUFpQjs7Ozs7O1FBS2pCLGlDQUFxQjs7Ozs7UUFJckIsMEJBQWM7Ozs7Ozs7OztJQVNoQix3QkFLQzs7Ozs7OztRQURDLDJCQUFzQjs7Ozs7OztJQU94QixnQ0FhQzs7Ozs7OztRQVRDLHFDQUFrQjs7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O0lBSkQsV0FBWSxJQUFJO1FBQ2QsbUJBQVcsQ0FBQTtRQUNYLDJCQUFtQixDQUFBO1FBQ25CLHVCQUFlLENBQUE7SUFDakIsQ0FBQyxFQUpXLElBQUksR0FBSixRQUFJLEtBQUosUUFBSSxRQUlmOzs7O0lBRUQsOEJBTUM7Ozs7UUFMQyw2QkFBWTs7UUFDWiwrQkFBYzs7UUFDZCxzQ0FBcUI7O1FBQ3JCLGtDQUFpQjs7UUFDakIseUNBQXlCOzs7OztJQUczQixzQkFJQzs7OztRQUhDLHVCQUFjOztRQUNkLG1DQUF3Qjs7UUFDeEIsdUNBQTRCOzs7OztJQUc5QixrQ0FFQzs7OztRQURDLCtDQUFxQzs7QUFFekMsQ0FBQyxFQXIzSGdCLEdBQUcsS0FBSCxHQUFHLFFBcTNIbkIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgbmFtZXNwYWNlIE9jYyB7XG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvdW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvdW50cnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVdXG4gICAgICovXG4gICAgaXNvY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZWdpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJlZ2lvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY291bnRyeUlzb11cbiAgICAgKi9cbiAgICBjb3VudHJ5SXNvPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVdXG4gICAgICovXG4gICAgaXNvY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtpc29jb2RlU2hvcnRdXG4gICAgICovXG4gICAgaXNvY29kZVNob3J0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJlZ2lvbkxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJlZ2lvbkxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1JlZ2lvbltdfSBbcmVnaW9uc11cbiAgICAgKi9cbiAgICByZWdpb25zPzogUmVnaW9uW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBBZGRyZXNzLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBBZGRyZXNzIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb21wYW55TmFtZV1cbiAgICAgKi9cbiAgICBjb21wYW55TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb3VudHJ5fSBbY291bnRyeV1cbiAgICAgKi9cbiAgICBjb3VudHJ5PzogQ291bnRyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZGVmYXVsdEFkZHJlc3NdXG4gICAgICovXG4gICAgZGVmYXVsdEFkZHJlc3M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2VtYWlsXVxuICAgICAqL1xuICAgIGVtYWlsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZpcnN0TmFtZV1cbiAgICAgKi9cbiAgICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkQWRkcmVzc11cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWRBZGRyZXNzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xhc3ROYW1lXVxuICAgICAqL1xuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xpbmUxXVxuICAgICAqL1xuICAgIGxpbmUxPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xpbmUyXVxuICAgICAqL1xuICAgIGxpbmUyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Bob25lXVxuICAgICAqL1xuICAgIHBob25lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Bvc3RhbENvZGVdXG4gICAgICovXG4gICAgcG9zdGFsQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtSZWdpb259IFtyZWdpb25dXG4gICAgICovXG4gICAgcmVnaW9uPzogUmVnaW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtzaGlwcGluZ0FkZHJlc3NdXG4gICAgICovXG4gICAgc2hpcHBpbmdBZGRyZXNzPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZUNvZGVdXG4gICAgICovXG4gICAgdGl0bGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Rvd25dXG4gICAgICovXG4gICAgdG93bj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdmlzaWJsZUluQWRkcmVzc0Jvb2tdXG4gICAgICovXG4gICAgdmlzaWJsZUluQWRkcmVzc0Jvb2s/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQWRkcmVzc0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEFkZHJlc3NMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzW119IFthZGRyZXNzZXNdXG4gICAgICovXG4gICAgYWRkcmVzc2VzPzogQWRkcmVzc1tdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRXJyb3JNb2RlbC5cbiAgICogRXJyb3IgbWVzc2FnZVxuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBFcnJvck1vZGVsIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFttZXNzYWdlXSBEZXNjcmlwdGl2ZSwgaHVtYW4gcmVhZGFibGUgZXJyb3IgbWVzc2FnZS5cbiAgICAgKi9cbiAgICBtZXNzYWdlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3JlYXNvbl0gQWRkaXRpb25hbCBjbGFzc2lmaWNhdGlvbiBzcGVjaWZpYyBmb3IgZWFjaFxuICAgICAqIGVycm9yIHR5cGUgZS5nLiAnbm9TdG9jaycuXG4gICAgICovXG4gICAgcmVhc29uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1YmplY3RdIElkZW50aWZpZXIgb2YgdGhlIHJlbGF0ZWQgb2JqZWN0IGUuZy4gJzEnLlxuICAgICAqL1xuICAgIHN1YmplY3Q/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ViamVjdFR5cGVdIFR5cGUgb2YgdGhlIG9iamVjdCByZWxhdGVkIHRvIHRoZSBlcnJvclxuICAgICAqIGUuZy4gJ2VudHJ5Jy5cbiAgICAgKi9cbiAgICBzdWJqZWN0VHlwZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlXSBUeXBlIG9mIHRoZSBlcnJvciBlLmcuICdMb3dTdG9ja0Vycm9yJy5cbiAgICAgKi9cbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRXJyb3JMaXN0LlxuICAgKiBMaXN0IG9mIGVycm9yc1xuICAgKlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBFcnJvckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yTW9kZWxbXX0gW2Vycm9yc11cbiAgICAgKi9cbiAgICBlcnJvcnM/OiBFcnJvck1vZGVsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBBZGRyZXNzVmFsaWRhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQWRkcmVzc1ZhbGlkYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2RlY2lzaW9uXVxuICAgICAqL1xuICAgIGRlY2lzaW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Vycm9yTGlzdH0gW2Vycm9yc11cbiAgICAgKi9cbiAgICBlcnJvcnM/OiBFcnJvckxpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc1tdfSBbc3VnZ2VzdGVkQWRkcmVzc2VzXVxuICAgICAqL1xuICAgIHN1Z2dlc3RlZEFkZHJlc3Nlcz86IEFkZHJlc3NbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByaWNlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcmljZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3VycmVuY3lJc29dXG4gICAgICovXG4gICAgY3VycmVuY3lJc28/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkVmFsdWVdXG4gICAgICovXG4gICAgZm9ybWF0dGVkVmFsdWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWF4UXVhbnRpdHldXG4gICAgICovXG4gICAgbWF4UXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWluUXVhbnRpdHldXG4gICAgICovXG4gICAgbWluUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2VUeXBlfSBbcHJpY2VUeXBlXSBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JVWScsICdGUk9NJ1xuICAgICAqL1xuICAgIHByaWNlVHlwZT86IFByaWNlVHlwZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN0b2NrLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9jayB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc3RvY2tMZXZlbF1cbiAgICAgKi9cbiAgICBzdG9ja0xldmVsPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b2NrTGV2ZWxTdGF0dXNdXG4gICAgICovXG4gICAgc3RvY2tMZXZlbFN0YXR1cz86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEltYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBJbWFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYWx0VGV4dF1cbiAgICAgKi9cbiAgICBhbHRUZXh0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdF1cbiAgICAgKi9cbiAgICBmb3JtYXQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbZ2FsbGVyeUluZGV4XVxuICAgICAqL1xuICAgIGdhbGxlcnlJbmRleD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVR5cGV9IFtpbWFnZVR5cGVdIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnUFJJTUFSWScsXG4gICAgICogJ0dBTExFUlknXG4gICAgICovXG4gICAgaW1hZ2VUeXBlPzogSW1hZ2VUeXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50T3B0aW9uUXVhbGlmaWVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uUXVhbGlmaWVyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW2ltYWdlXVxuICAgICAqL1xuICAgIGltYWdlPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3F1YWxpZmllcl1cbiAgICAgKi9cbiAgICBxdWFsaWZpZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50T3B0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50T3B0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtwcmljZURhdGFdXG4gICAgICovXG4gICAgcHJpY2VEYXRhPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja11cbiAgICAgKi9cbiAgICBzdG9jaz86IFN0b2NrO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VybF1cbiAgICAgKi9cbiAgICB1cmw/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvblF1YWxpZmllcltdfSBbdmFyaWFudE9wdGlvblF1YWxpZmllcnNdXG4gICAgICovXG4gICAgdmFyaWFudE9wdGlvblF1YWxpZmllcnM/OiBWYXJpYW50T3B0aW9uUXVhbGlmaWVyW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBCYXNlT3B0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBCYXNlT3B0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWYXJpYW50T3B0aW9uW119IFtvcHRpb25zXVxuICAgICAqL1xuICAgIG9wdGlvbnM/OiBWYXJpYW50T3B0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogVmFyaWFudE9wdGlvbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YXJpYW50VHlwZV1cbiAgICAgKi9cbiAgICB2YXJpYW50VHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFNlYXJjaFF1ZXJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTZWFyY2hRdWVyeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdmFsdWVdXG4gICAgICovXG4gICAgdmFsdWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTZWFyY2hTdGF0ZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2VhcmNoU3RhdGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFF1ZXJ5fSBbcXVlcnldXG4gICAgICovXG4gICAgcXVlcnk/OiBTZWFyY2hRdWVyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQnJlYWRjcnVtYi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQnJlYWRjcnVtYiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmFjZXRDb2RlXVxuICAgICAqL1xuICAgIGZhY2V0Q29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtmYWNldE5hbWVdXG4gICAgICovXG4gICAgZmFjZXROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0VmFsdWVDb2RlXVxuICAgICAqL1xuICAgIGZhY2V0VmFsdWVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZhY2V0VmFsdWVOYW1lXVxuICAgICAqL1xuICAgIGZhY2V0VmFsdWVOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NlYXJjaFN0YXRlfSBbcmVtb3ZlUXVlcnldXG4gICAgICovXG4gICAgcmVtb3ZlUXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW3RydW5jYXRlUXVlcnldXG4gICAgICovXG4gICAgdHJ1bmNhdGVRdWVyeT86IFNlYXJjaFN0YXRlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29tcG9uZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb21wb25lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFttb2RpZmllZHRpbWVdXG4gICAgICovXG4gICAgbW9kaWZpZWR0aW1lPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7YW55fSBbb3RoZXJQcm9wZXJ0aWVzXVxuICAgICAqL1xuICAgIG90aGVyUHJvcGVydGllcz86IGFueTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlQ29kZV1cbiAgICAgKi9cbiAgICB0eXBlQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1aWRdXG4gICAgICovXG4gICAgdWlkPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29tcG9uZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29tcG9uZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29tcG9uZW50W119IFtjb21wb25lbnRdXG4gICAgICovXG4gICAgY29tcG9uZW50PzogQ29tcG9uZW50W10gfCBhbnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENvbnRlbnRTbG90LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2xvdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q29tcG9uZW50TGlzdH0gW2NvbXBvbmVudHNdXG4gICAgICovXG4gICAgY29tcG9uZW50cz86IENvbXBvbmVudExpc3Q7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Bvc2l0aW9uXVxuICAgICAqL1xuICAgIHBvc2l0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Nsb3RJZF1cbiAgICAgKi9cbiAgICBzbG90SWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3Nsb3RTaGFyZWRdXG4gICAgICovXG4gICAgc2xvdFNoYXJlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc2xvdFN0YXR1c11cbiAgICAgKi9cbiAgICBzbG90U3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29udGVudFNsb3RMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb250ZW50U2xvdExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NvbnRlbnRTbG90W119IFtjb250ZW50U2xvdF1cbiAgICAgKi9cbiAgICBjb250ZW50U2xvdD86IENvbnRlbnRTbG90W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDTVNQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDTVNQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb250ZW50U2xvdExpc3R9IFtjb250ZW50U2xvdHNdXG4gICAgICovXG4gICAgY29udGVudFNsb3RzPzogQ29udGVudFNsb3RMaXN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtkZWZhdWx0UGFnZV1cbiAgICAgKi9cbiAgICBkZWZhdWx0UGFnZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RlbXBsYXRlXVxuICAgICAqL1xuICAgIHRlbXBsYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3RpdGxlXVxuICAgICAqL1xuICAgIHRpdGxlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3R5cGVDb2RlXVxuICAgICAqL1xuICAgIHR5cGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJkVHlwZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2FyZFR5cGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJkVHlwZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcmRUeXBlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2FyZFR5cGVbXX0gW2NhcmRUeXBlc11cbiAgICAgKi9cbiAgICBjYXJkVHlwZXM/OiBDYXJkVHlwZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25PcmRlckVudHJ5Q29uc3VtZWQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2FkanVzdGVkVW5pdFByaWNlXVxuICAgICAqL1xuICAgIGFkanVzdGVkVW5pdFByaWNlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtvcmRlckVudHJ5TnVtYmVyXVxuICAgICAqL1xuICAgIG9yZGVyRW50cnlOdW1iZXI/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25SZXN0cmljdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdHJpY3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3Jlc3RyaWN0aW9uVHlwZV1cbiAgICAgKi9cbiAgICByZXN0cmljdGlvblR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ1tdfSBbY291bGRGaXJlTWVzc2FnZXNdXG4gICAgICovXG4gICAgY291bGRGaXJlTWVzc2FnZXM/OiBzdHJpbmdbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZW5hYmxlZF1cbiAgICAgKi9cbiAgICBlbmFibGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbZW5kRGF0ZV1cbiAgICAgKi9cbiAgICBlbmREYXRlPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmdbXX0gW2ZpcmVkTWVzc2FnZXNdXG4gICAgICovXG4gICAgZmlyZWRNZXNzYWdlcz86IHN0cmluZ1tdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ByaW9yaXR5XVxuICAgICAqL1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbcHJvZHVjdEJhbm5lcl1cbiAgICAgKi9cbiAgICBwcm9kdWN0QmFubmVyPzogSW1hZ2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcHJvbW90aW9uR3JvdXBdXG4gICAgICovXG4gICAgcHJvbW90aW9uR3JvdXA/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbcHJvbW90aW9uVHlwZV1cbiAgICAgKi9cbiAgICBwcm9tb3Rpb25UeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3RyaWN0aW9uW119IFtyZXN0cmljdGlvbnNdXG4gICAgICovXG4gICAgcmVzdHJpY3Rpb25zPzogUHJvbW90aW9uUmVzdHJpY3Rpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEYXRlfSBbc3RhcnREYXRlXVxuICAgICAqL1xuICAgIHN0YXJ0RGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdGl0bGVdXG4gICAgICovXG4gICAgdGl0bGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25SZXN1bHQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByb21vdGlvblJlc3VsdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkW119IFtjb25zdW1lZEVudHJpZXNdXG4gICAgICovXG4gICAgY29uc3VtZWRFbnRyaWVzPzogUHJvbW90aW9uT3JkZXJFbnRyeUNvbnN1bWVkW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9ufSBbcHJvbW90aW9uXVxuICAgICAqL1xuICAgIHByb21vdGlvbj86IFByb21vdGlvbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEN1cnJlbmN5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FjdGl2ZV1cbiAgICAgKi9cbiAgICBhY3RpdmU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lzb2NvZGVdXG4gICAgICovXG4gICAgaXNvY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ltYm9sXVxuICAgICAqL1xuICAgIHN5bWJvbD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFZvdWNoZXIuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZvdWNoZXIge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbYXBwbGllZFZhbHVlXVxuICAgICAqL1xuICAgIGFwcGxpZWRWYWx1ZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDdXJyZW5jeX0gW2N1cnJlbmN5XVxuICAgICAqL1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2ZyZWVTaGlwcGluZ11cbiAgICAgKi9cbiAgICBmcmVlU2hpcHBpbmc/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZUZvcm1hdHRlZF1cbiAgICAgKi9cbiAgICB2YWx1ZUZvcm1hdHRlZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZVN0cmluZ11cbiAgICAgKi9cbiAgICB2YWx1ZVN0cmluZz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2b3VjaGVyQ29kZV1cbiAgICAgKi9cbiAgICB2b3VjaGVyQ29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIERlbGl2ZXJ5TW9kZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlNb2RlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtkZWxpdmVyeUNvc3RdXG4gICAgICovXG4gICAgZGVsaXZlcnlDb3N0PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgR2VvUG9pbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEdlb1BvaW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtsYXRpdHVkZV1cbiAgICAgKi9cbiAgICBsYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtsb25naXR1ZGVdXG4gICAgICovXG4gICAgbG9uZ2l0dWRlPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVGltZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGltZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkSG91cl1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWRIb3VyPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2hvdXJdXG4gICAgICovXG4gICAgaG91cj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFttaW51dGVdXG4gICAgICovXG4gICAgbWludXRlPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3BlY2lhbE9wZW5pbmdEYXkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFNwZWNpYWxPcGVuaW5nRGF5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2xvc2VkXVxuICAgICAqL1xuICAgIGNsb3NlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW2Nsb3NpbmdUaW1lXVxuICAgICAqL1xuICAgIGNsb3NpbmdUaW1lPzogVGltZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb21tZW50XVxuICAgICAqL1xuICAgIGNvbW1lbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2RhdGVdXG4gICAgICovXG4gICAgZGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZm9ybWF0dGVkRGF0ZV1cbiAgICAgKi9cbiAgICBmb3JtYXR0ZWREYXRlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbb3BlbmluZ1RpbWVdXG4gICAgICovXG4gICAgb3BlbmluZ1RpbWU/OiBUaW1lO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgV2Vla2RheU9wZW5pbmdEYXkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFdlZWtkYXlPcGVuaW5nRGF5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY2xvc2VkXVxuICAgICAqL1xuICAgIGNsb3NlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGltZX0gW2Nsb3NpbmdUaW1lXVxuICAgICAqL1xuICAgIGNsb3NpbmdUaW1lPzogVGltZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtUaW1lfSBbb3BlbmluZ1RpbWVdXG4gICAgICovXG4gICAgb3BlbmluZ1RpbWU/OiBUaW1lO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3dlZWtEYXldXG4gICAgICovXG4gICAgd2Vla0RheT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9wZW5pbmdTY2hlZHVsZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3BlbmluZ1NjaGVkdWxlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NwZWNpYWxPcGVuaW5nRGF5W119IFtzcGVjaWFsRGF5T3BlbmluZ0xpc3RdXG4gICAgICovXG4gICAgc3BlY2lhbERheU9wZW5pbmdMaXN0PzogU3BlY2lhbE9wZW5pbmdEYXlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtXZWVrZGF5T3BlbmluZ0RheVtdfSBbd2Vla0RheU9wZW5pbmdMaXN0XVxuICAgICAqL1xuICAgIHdlZWtEYXlPcGVuaW5nTGlzdD86IFdlZWtkYXlPcGVuaW5nRGF5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQb2ludE9mU2VydmljZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUG9pbnRPZlNlcnZpY2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFthZGRyZXNzXVxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rpc3BsYXlOYW1lXVxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2Rpc3RhbmNlS21dXG4gICAgICovXG4gICAgZGlzdGFuY2VLbT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHt7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9fSBbZmVhdHVyZXNdXG4gICAgICovXG4gICAgZmVhdHVyZXM/OiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERpc3RhbmNlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERpc3RhbmNlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0dlb1BvaW50fSBbZ2VvUG9pbnRdXG4gICAgICovXG4gICAgZ2VvUG9pbnQ/OiBHZW9Qb2ludDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW21hcEljb25dXG4gICAgICovXG4gICAgbWFwSWNvbj86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcGVuaW5nU2NoZWR1bGV9IFtvcGVuaW5nSG91cnNdXG4gICAgICovXG4gICAgb3BlbmluZ0hvdXJzPzogT3BlbmluZ1NjaGVkdWxlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlQ29udGVudF1cbiAgICAgKi9cbiAgICBzdG9yZUNvbnRlbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2VbXX0gW3N0b3JlSW1hZ2VzXVxuICAgICAqL1xuICAgIHN0b3JlSW1hZ2VzPzogSW1hZ2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0ZWdvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhdGVnb3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ltYWdlfSBbaW1hZ2VdXG4gICAgICovXG4gICAgaW1hZ2U/OiBJbWFnZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRmVhdHVyZVVuaXQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZlYXR1cmVVbml0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3ltYm9sXVxuICAgICAqL1xuICAgIHN5bWJvbD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1bml0VHlwZV1cbiAgICAgKi9cbiAgICB1bml0VHlwZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZlYXR1cmVWYWx1ZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRmVhdHVyZVZhbHVlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZlYXR1cmUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZlYXR1cmUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbY29tcGFyYWJsZV1cbiAgICAgKi9cbiAgICBjb21wYXJhYmxlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZXNjcmlwdGlvbl1cbiAgICAgKi9cbiAgICBkZXNjcmlwdGlvbj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGZWF0dXJlVW5pdH0gW2ZlYXR1cmVVbml0XVxuICAgICAqL1xuICAgIGZlYXR1cmVVbml0PzogRmVhdHVyZVVuaXQ7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RmVhdHVyZVZhbHVlW119IFtmZWF0dXJlVmFsdWVzXVxuICAgICAqL1xuICAgIGZlYXR1cmVWYWx1ZXM/OiBGZWF0dXJlVmFsdWVbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3JhbmdlXVxuICAgICAqL1xuICAgIHJhbmdlPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0eXBlXVxuICAgICAqL1xuICAgIHR5cGU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDbGFzc2lmaWNhdGlvbi5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2xhc3NpZmljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGZWF0dXJlW119IFtmZWF0dXJlc11cbiAgICAgKi9cbiAgICBmZWF0dXJlcz86IEZlYXR1cmVbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBGdXR1cmVTdG9jay5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRnV0dXJlU3RvY2sge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkYXRlXVxuICAgICAqL1xuICAgIGRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERhdGVdXG4gICAgICovXG4gICAgZm9ybWF0dGVkRGF0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTdG9ja30gW3N0b2NrXVxuICAgICAqL1xuICAgIHN0b2NrPzogU3RvY2s7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcmljZVJhbmdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcmljZVJhbmdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW21heFByaWNlXVxuICAgICAqL1xuICAgIG1heFByaWNlPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFttaW5QcmljZV1cbiAgICAgKi9cbiAgICBtaW5QcmljZT86IFByaWNlO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdFJlZmVyZW5jZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdFJlZmVyZW5jZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3ByZXNlbGVjdGVkXVxuICAgICAqL1xuICAgIHByZXNlbGVjdGVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtyZWZlcmVuY2VUeXBlXVxuICAgICAqL1xuICAgIHJlZmVyZW5jZVR5cGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdH0gW3RhcmdldF1cbiAgICAgKi9cbiAgICB0YXJnZXQ/OiBQcm9kdWN0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTGFuZ3VhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbYWN0aXZlXVxuICAgICAqL1xuICAgIGFjdGl2ZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNvY29kZV1cbiAgICAgKi9cbiAgICBpc29jb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYXRpdmVOYW1lXVxuICAgICAqL1xuICAgIG5hdGl2ZU5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBVc2VyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBVc2VyIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDdXJyZW5jeX0gW2N1cnJlbmN5XVxuICAgICAqL1xuICAgIGN1cnJlbmN5PzogQ3VycmVuY3k7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY3VzdG9tZXJJZF1cbiAgICAgKi9cbiAgICBjdXN0b21lcklkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkZWFjdGl2YXRpb25EYXRlXVxuICAgICAqL1xuICAgIGRlYWN0aXZhdGlvbkRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWZhdWx0QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWZhdWx0QWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGlzcGxheVVpZF1cbiAgICAgKi9cbiAgICBkaXNwbGF5VWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2ZpcnN0TmFtZV1cbiAgICAgKi9cbiAgICBmaXJzdE5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TGFuZ3VhZ2V9IFtsYW5ndWFnZV1cbiAgICAgKi9cbiAgICBsYW5ndWFnZT86IExhbmd1YWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xhc3ROYW1lXVxuICAgICAqL1xuICAgIGxhc3ROYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZV1cbiAgICAgKi9cbiAgICB0aXRsZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZUNvZGVdXG4gICAgICovXG4gICAgdGl0bGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBSZXZpZXcuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJldmlldyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYWxpYXNdXG4gICAgICovXG4gICAgYWxpYXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29tbWVudF1cbiAgICAgKi9cbiAgICBjb21tZW50Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtkYXRlXVxuICAgICAqL1xuICAgIGRhdGU/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2hlYWRsaW5lXVxuICAgICAqL1xuICAgIGhlYWRsaW5lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1VzZXJ9IFtwcmluY2lwYWxdXG4gICAgICovXG4gICAgcHJpbmNpcGFsPzogVXNlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtyYXRpbmddXG4gICAgICovXG4gICAgcmF0aW5nPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudENhdGVnb3J5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBWYXJpYW50Q2F0ZWdvcnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtoYXNJbWFnZV1cbiAgICAgKi9cbiAgICBoYXNJbWFnZT86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3ByaW9yaXR5XVxuICAgICAqL1xuICAgIHByaW9yaXR5PzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVmFyaWFudFZhbHVlQ2F0ZWdvcnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFZhcmlhbnRWYWx1ZUNhdGVnb3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbc2VxdWVuY2VdXG4gICAgICovXG4gICAgc2VxdWVuY2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudENhdGVnb3J5W119IFtzdXBlckNhdGVnb3JpZXNdXG4gICAgICovXG4gICAgc3VwZXJDYXRlZ29yaWVzPzogVmFyaWFudENhdGVnb3J5W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWYXJpYW50TWF0cml4RWxlbWVudC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVmFyaWFudE1hdHJpeEVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRNYXRyaXhFbGVtZW50W119IFtlbGVtZW50c11cbiAgICAgKi9cbiAgICBlbGVtZW50cz86IFZhcmlhbnRNYXRyaXhFbGVtZW50W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2lzTGVhZl1cbiAgICAgKi9cbiAgICBpc0xlYWY/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRDYXRlZ29yeX0gW3BhcmVudFZhcmlhbnRDYXRlZ29yeV1cbiAgICAgKi9cbiAgICBwYXJlbnRWYXJpYW50Q2F0ZWdvcnk/OiBWYXJpYW50Q2F0ZWdvcnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudE9wdGlvbn0gW3ZhcmlhbnRPcHRpb25dXG4gICAgICovXG4gICAgdmFyaWFudE9wdGlvbj86IFZhcmlhbnRPcHRpb247XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VmFyaWFudFZhbHVlQ2F0ZWdvcnl9IFt2YXJpYW50VmFsdWVDYXRlZ29yeV1cbiAgICAgKi9cbiAgICB2YXJpYW50VmFsdWVDYXRlZ29yeT86IFZhcmlhbnRWYWx1ZUNhdGVnb3J5O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2F2YWlsYWJsZUZvclBpY2t1cF1cbiAgICAgKi9cbiAgICBhdmFpbGFibGVGb3JQaWNrdXA/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2F2ZXJhZ2VSYXRpbmddXG4gICAgICovXG4gICAgYXZlcmFnZVJhdGluZz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtCYXNlT3B0aW9uW119IFtiYXNlT3B0aW9uc11cbiAgICAgKi9cbiAgICBiYXNlT3B0aW9ucz86IEJhc2VPcHRpb25bXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtiYXNlUHJvZHVjdF1cbiAgICAgKi9cbiAgICBiYXNlUHJvZHVjdD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXRlZ29yeVtdfSBbY2F0ZWdvcmllc11cbiAgICAgKi9cbiAgICBjYXRlZ29yaWVzPzogQ2F0ZWdvcnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDbGFzc2lmaWNhdGlvbltdfSBbY2xhc3NpZmljYXRpb25zXVxuICAgICAqL1xuICAgIGNsYXNzaWZpY2F0aW9ucz86IENsYXNzaWZpY2F0aW9uW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0Z1dHVyZVN0b2NrW119IFtmdXR1cmVTdG9ja3NdXG4gICAgICovXG4gICAgZnV0dXJlU3RvY2tzPzogRnV0dXJlU3RvY2tbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZVtdfSBbaW1hZ2VzXVxuICAgICAqL1xuICAgIGltYWdlcz86IEltYWdlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbWFudWZhY3R1cmVyXVxuICAgICAqL1xuICAgIG1hbnVmYWN0dXJlcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbXVsdGlkaW1lbnNpb25hbF1cbiAgICAgKi9cbiAgICBtdWx0aWRpbWVuc2lvbmFsPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbnVtYmVyT2ZSZXZpZXdzXVxuICAgICAqL1xuICAgIG51bWJlck9mUmV2aWV3cz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25bXX0gW3BvdGVudGlhbFByb21vdGlvbnNdXG4gICAgICovXG4gICAgcG90ZW50aWFsUHJvbW90aW9ucz86IFByb21vdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbcHJpY2VdXG4gICAgICovXG4gICAgcHJpY2U/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZVJhbmdlfSBbcHJpY2VSYW5nZV1cbiAgICAgKi9cbiAgICBwcmljZVJhbmdlPzogUHJpY2VSYW5nZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0UmVmZXJlbmNlW119IFtwcm9kdWN0UmVmZXJlbmNlc11cbiAgICAgKi9cbiAgICBwcm9kdWN0UmVmZXJlbmNlcz86IFByb2R1Y3RSZWZlcmVuY2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbcHVyY2hhc2FibGVdXG4gICAgICovXG4gICAgcHVyY2hhc2FibGU/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Jldmlld1tdfSBbcmV2aWV3c11cbiAgICAgKi9cbiAgICByZXZpZXdzPzogUmV2aWV3W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3RvY2t9IFtzdG9ja11cbiAgICAgKi9cbiAgICBzdG9jaz86IFN0b2NrO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1bW1hcnldXG4gICAgICovXG4gICAgc3VtbWFyeT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRNYXRyaXhFbGVtZW50W119IFt2YXJpYW50TWF0cml4XVxuICAgICAqL1xuICAgIHZhcmlhbnRNYXRyaXg/OiBWYXJpYW50TWF0cml4RWxlbWVudFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZhcmlhbnRPcHRpb25bXX0gW3ZhcmlhbnRPcHRpb25zXVxuICAgICAqL1xuICAgIHZhcmlhbnRPcHRpb25zPzogVmFyaWFudE9wdGlvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZhcmlhbnRUeXBlXVxuICAgICAqL1xuICAgIHZhcmlhbnRUeXBlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlW119IFt2b2x1bWVQcmljZXNdXG4gICAgICovXG4gICAgdm9sdW1lUHJpY2VzPzogUHJpY2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbdm9sdW1lUHJpY2VzRmxhZ11cbiAgICAgKi9cbiAgICB2b2x1bWVQcmljZXNGbGFnPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyRW50cnkuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyRW50cnkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbYmFzZVByaWNlXVxuICAgICAqL1xuICAgIGJhc2VQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZX0gW2RlbGl2ZXJ5TW9kZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2V9IFtkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtlbnRyeU51bWJlcl1cbiAgICAgKi9cbiAgICBlbnRyeU51bWJlcj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9kdWN0fSBbcHJvZHVjdF1cbiAgICAgKi9cbiAgICBwcm9kdWN0PzogUHJvZHVjdDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFt1cGRhdGVhYmxlXVxuICAgICAqL1xuICAgIHVwZGF0ZWFibGU/OiBib29sZWFuO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRGVsaXZlcnlPcmRlckVudHJ5R3JvdXAuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtBZGRyZXNzfSBbZGVsaXZlcnlBZGRyZXNzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5QWRkcmVzcz86IEFkZHJlc3M7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3F1YW50aXR5XVxuICAgICAqL1xuICAgIHF1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBheW1lbnREZXRhaWxzLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQYXltZW50RGV0YWlscyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYWNjb3VudEhvbGRlck5hbWVdXG4gICAgICovXG4gICAgYWNjb3VudEhvbGRlck5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2JpbGxpbmdBZGRyZXNzXVxuICAgICAqL1xuICAgIGJpbGxpbmdBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjYXJkTnVtYmVyXVxuICAgICAqL1xuICAgIGNhcmROdW1iZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2FyZFR5cGV9IFtjYXJkVHlwZV1cbiAgICAgKi9cbiAgICBjYXJkVHlwZT86IENhcmRUeXBlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2N2bl1cbiAgICAgKi9cbiAgICBjdm4/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2RlZmF1bHRQYXltZW50XVxuICAgICAqL1xuICAgIGRlZmF1bHRQYXltZW50PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtleHBpcnlNb250aF1cbiAgICAgKi9cbiAgICBleHBpcnlNb250aD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtleHBpcnlZZWFyXVxuICAgICAqL1xuICAgIGV4cGlyeVllYXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaXNzdWVOdW1iZXJdXG4gICAgICovXG4gICAgaXNzdWVOdW1iZXI/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NhdmVkXVxuICAgICAqL1xuICAgIHNhdmVkPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGFydE1vbnRoXVxuICAgICAqL1xuICAgIHN0YXJ0TW9udGg/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc3RhcnRZZWFyXVxuICAgICAqL1xuICAgIHN0YXJ0WWVhcj86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdWJzY3JpcHRpb25JZF1cbiAgICAgKi9cbiAgICBzdWJzY3JpcHRpb25JZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBpY2t1cE9yZGVyRW50cnlHcm91cC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUGlja3VwT3JkZXJFbnRyeUdyb3VwIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQb2ludE9mU2VydmljZX0gW2RlbGl2ZXJ5UG9pbnRPZlNlcnZpY2VdXG4gICAgICovXG4gICAgZGVsaXZlcnlQb2ludE9mU2VydmljZT86IFBvaW50T2ZTZXJ2aWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2Rpc3RhbmNlXVxuICAgICAqL1xuICAgIGRpc3RhbmNlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VXaXRoVGF4XVxuICAgICAqL1xuICAgIHRvdGFsUHJpY2VXaXRoVGF4PzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcmluY2lwYWwuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFByaW5jaXBhbCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbmFtZV1cbiAgICAgKi9cbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXJ0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXJ0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW2FwcGxpZWRPcmRlclByb21vdGlvbnNdXG4gICAgICovXG4gICAgYXBwbGllZE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbYXBwbGllZFByb2R1Y3RQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIGFwcGxpZWRQcm9kdWN0UHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZvdWNoZXJbXX0gW2FwcGxpZWRWb3VjaGVyc11cbiAgICAgKi9cbiAgICBhcHBsaWVkVm91Y2hlcnM/OiBWb3VjaGVyW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NhbGN1bGF0ZWRdXG4gICAgICovXG4gICAgY2FsY3VsYXRlZD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFtkZWxpdmVyeUFkZHJlc3NdXG4gICAgICovXG4gICAgZGVsaXZlcnlBZGRyZXNzPzogQWRkcmVzcztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW2RlbGl2ZXJ5Q29zdF1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUNvc3Q/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtkZWxpdmVyeUl0ZW1zUXVhbnRpdHldXG4gICAgICovXG4gICAgZGVsaXZlcnlJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RlbGl2ZXJ5TW9kZX0gW2RlbGl2ZXJ5TW9kZV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeU1vZGU/OiBEZWxpdmVyeU1vZGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXX0gW2RlbGl2ZXJ5T3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgZGVsaXZlcnlPcmRlckdyb3Vwcz86IERlbGl2ZXJ5T3JkZXJFbnRyeUdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZGVzY3JpcHRpb25dXG4gICAgICovXG4gICAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbZW50cmllc11cbiAgICAgKi9cbiAgICBlbnRyaWVzPzogT3JkZXJFbnRyeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtleHBpcmF0aW9uVGltZV1cbiAgICAgKi9cbiAgICBleHBpcmF0aW9uVGltZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZ3VpZF1cbiAgICAgKi9cbiAgICBndWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbmV0XVxuICAgICAqL1xuICAgIG5ldD86IGJvb2xlYW47XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFtvcmRlckRpc2NvdW50c11cbiAgICAgKi9cbiAgICBvcmRlckRpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BheW1lbnREZXRhaWxzfSBbcGF5bWVudEluZm9dXG4gICAgICovXG4gICAgcGF5bWVudEluZm8/OiBQYXltZW50RGV0YWlscztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwaWNrdXBJdGVtc1F1YW50aXR5XVxuICAgICAqL1xuICAgIHBpY2t1cEl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGlja3VwT3JkZXJFbnRyeUdyb3VwW119IFtwaWNrdXBPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBwaWNrdXBPcmRlckdyb3Vwcz86IFBpY2t1cE9yZGVyRW50cnlHcm91cFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbcG90ZW50aWFsT3JkZXJQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHBvdGVudGlhbE9yZGVyUHJvbW90aW9ucz86IFByb21vdGlvblJlc3VsdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb21vdGlvblJlc3VsdFtdfSBbcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnNdXG4gICAgICovXG4gICAgcG90ZW50aWFsUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3Byb2R1Y3REaXNjb3VudHNdXG4gICAgICovXG4gICAgcHJvZHVjdERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtzYXZlVGltZV1cbiAgICAgKi9cbiAgICBzYXZlVGltZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsfSBbc2F2ZWRCeV1cbiAgICAgKi9cbiAgICBzYXZlZEJ5PzogUHJpbmNpcGFsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3NpdGVdXG4gICAgICovXG4gICAgc2l0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZV1cbiAgICAgKi9cbiAgICBzdG9yZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3N1YlRvdGFsXVxuICAgICAqL1xuICAgIHN1YlRvdGFsPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbERpc2NvdW50c11cbiAgICAgKi9cbiAgICB0b3RhbERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsSXRlbXNdXG4gICAgICovXG4gICAgdG90YWxJdGVtcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsVGF4XVxuICAgICAqL1xuICAgIHRvdGFsVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxVbml0Q291bnRdXG4gICAgICovXG4gICAgdG90YWxVbml0Q291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsfSBbdXNlcl1cbiAgICAgKi9cbiAgICB1c2VyPzogUHJpbmNpcGFsO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2FydExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcnRMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDYXJ0W119IFtjYXJ0c11cbiAgICAgKi9cbiAgICBjYXJ0cz86IENhcnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhcnRNb2RpZmljYXRpb24uXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENhcnRNb2RpZmljYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtkZWxpdmVyeU1vZGVDaGFuZ2VkXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZUNoYW5nZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnl9IFtlbnRyeV1cbiAgICAgKi9cbiAgICBlbnRyeT86IE9yZGVyRW50cnk7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHldXG4gICAgICovXG4gICAgcXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcXVhbnRpdHlBZGRlZF1cbiAgICAgKi9cbiAgICBxdWFudGl0eUFkZGVkPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0NvZGVdXG4gICAgICovXG4gICAgc3RhdHVzQ29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNNZXNzYWdlXVxuICAgICAqL1xuICAgIHN0YXR1c01lc3NhZ2U/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDYXRlZ29yeUhpZXJhcmNoeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0ZWdvcnlIaWVyYXJjaHkge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtsYXN0TW9kaWZpZWRdXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0ZWdvcnlIaWVyYXJjaHlbXX0gW3N1YmNhdGVnb3JpZXNdXG4gICAgICovXG4gICAgc3ViY2F0ZWdvcmllcz86IENhdGVnb3J5SGllcmFyY2h5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGFsb2dWZXJzaW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nVmVyc2lvbiB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0ZWdvcnlIaWVyYXJjaHlbXX0gW2NhdGVnb3JpZXNdXG4gICAgICovXG4gICAgY2F0ZWdvcmllcz86IENhdGVnb3J5SGllcmFyY2h5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbaWRdXG4gICAgICovXG4gICAgaWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2xhc3RNb2RpZmllZF1cbiAgICAgKi9cbiAgICBsYXN0TW9kaWZpZWQ/OiBEYXRlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ2F0YWxvZy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ2F0YWxvZyB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0YWxvZ1ZlcnNpb25bXX0gW2NhdGFsb2dWZXJzaW9uc11cbiAgICAgKi9cbiAgICBjYXRhbG9nVmVyc2lvbnM/OiBDYXRhbG9nVmVyc2lvbltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2lkXVxuICAgICAqL1xuICAgIGlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtsYXN0TW9kaWZpZWRdXG4gICAgICovXG4gICAgbGFzdE1vZGlmaWVkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdXJsXVxuICAgICAqL1xuICAgIHVybD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIENhdGFsb2dMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDYXRhbG9nTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Q2F0YWxvZ1tdfSBbY2F0YWxvZ3NdXG4gICAgICovXG4gICAgY2F0YWxvZ3M/OiBDYXRhbG9nW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb21wb25lbnRJRExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbXBvbmVudElETGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nW119IFtpZExpc3RdXG4gICAgICovXG4gICAgaWRMaXN0Pzogc3RyaW5nW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBDb25zaWdubWVudEVudHJ5LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zaWdubWVudEVudHJ5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcmRlckVudHJ5fSBbb3JkZXJFbnRyeV1cbiAgICAgKi9cbiAgICBvcmRlckVudHJ5PzogT3JkZXJFbnRyeTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtxdWFudGl0eV1cbiAgICAgKi9cbiAgICBxdWFudGl0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzaGlwcGVkUXVhbnRpdHldXG4gICAgICovXG4gICAgc2hpcHBlZFF1YW50aXR5PzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ29uc2lnbm1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvbnNpZ25tZW50IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2V9IFtkZWxpdmVyeVBvaW50T2ZTZXJ2aWNlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5UG9pbnRPZlNlcnZpY2U/OiBQb2ludE9mU2VydmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb25zaWdubWVudEVudHJ5W119IFtlbnRyaWVzXVxuICAgICAqL1xuICAgIGVudHJpZXM/OiBDb25zaWdubWVudEVudHJ5W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW3NoaXBwaW5nQWRkcmVzc11cbiAgICAgKi9cbiAgICBzaGlwcGluZ0FkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c11cbiAgICAgKi9cbiAgICBzdGF0dXM/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW3N0YXR1c0RhdGVdXG4gICAgICovXG4gICAgc3RhdHVzRGF0ZT86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdHJhY2tpbmdJRF1cbiAgICAgKi9cbiAgICB0cmFja2luZ0lEPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ291bnRyeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIENvdW50cnlMaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb3VudHJ5W119IFtjb3VudHJpZXNdXG4gICAgICovXG4gICAgY291bnRyaWVzPzogQ291bnRyeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgQ3VycmVuY3lMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBDdXJyZW5jeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0N1cnJlbmN5W119IFtjdXJyZW5jaWVzXVxuICAgICAqL1xuICAgIGN1cnJlbmNpZXM/OiBDdXJyZW5jeVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgRGVsaXZlcnlNb2RlTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgRGVsaXZlcnlNb2RlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlW119IFtkZWxpdmVyeU1vZGVzXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZXM/OiBEZWxpdmVyeU1vZGVbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZhY2V0VmFsdWUuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIEZhY2V0VmFsdWUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2NvdW50XVxuICAgICAqL1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW3F1ZXJ5XVxuICAgICAqL1xuICAgIHF1ZXJ5PzogU2VhcmNoU3RhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIEZhY2V0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBGYWNldCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2NhdGVnb3J5XVxuICAgICAqL1xuICAgIGNhdGVnb3J5PzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbbXVsdGlTZWxlY3RdXG4gICAgICovXG4gICAgbXVsdGlTZWxlY3Q/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgKi9cbiAgICBwcmlvcml0eT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGYWNldFZhbHVlW119IFt0b3BWYWx1ZXNdXG4gICAgICovXG4gICAgdG9wVmFsdWVzPzogRmFjZXRWYWx1ZVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0ZhY2V0VmFsdWVbXX0gW3ZhbHVlc11cbiAgICAgKi9cbiAgICB2YWx1ZXM/OiBGYWNldFZhbHVlW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3Zpc2libGVdXG4gICAgICovXG4gICAgdmlzaWJsZT86IGJvb2xlYW47XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBMYW5ndWFnZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIExhbmd1YWdlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7TGFuZ3VhZ2VbXX0gW2xhbmd1YWdlc11cbiAgICAgKi9cbiAgICBsYW5ndWFnZXM/OiBMYW5ndWFnZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUGFnaW5hdGlvbi5cbiAgICogUGFnaW5hdGlvbiBpbmZvXG4gICAqXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2NvdW50XSBOdW1iZXIgb2YgZWxlbWVudHMgb24gdGhpcyBwYWdlXG4gICAgICovXG4gICAgY291bnQ/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGFnZV0gQ3VycmVudCBwYWdlIG51bWJlclxuICAgICAqL1xuICAgIHBhZ2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbdG90YWxDb3VudF0gVG90YWwgbnVtYmVyIG9mIGVsZW1lbnRzXG4gICAgICovXG4gICAgdG90YWxDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFBhZ2VzXSBUb3RhbCBudW1iZXIgb2YgcGFnZXNcbiAgICAgKi9cbiAgICB0b3RhbFBhZ2VzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU29ydC5cbiAgICogU29ydCBvcHRpb25cbiAgICpcbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU29ydCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW2FzY11cbiAgICAgKi9cbiAgICBhc2M/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIExpc3RBZGFwdGVkQ29tcG9uZW50cy5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTGlzdEFkYXB0ZWRDb21wb25lbnRzIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHthbnlbXX0gW2NvbXBvbmVudHNdXG4gICAgICovXG4gICAgY29tcG9uZW50cz86IGFueVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb259IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgTWVtYmVyTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgTWVtYmVyTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpbmNpcGFsW119IFttZW1iZXJzXVxuICAgICAqL1xuICAgIG1lbWJlcnM/OiBQcmluY2lwYWxbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyRW50cnlMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlckVudHJ5TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbb3JkZXJFbnRyaWVzXVxuICAgICAqL1xuICAgIG9yZGVyRW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVySGlzdG9yeS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJIaXN0b3J5IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtjb2RlXVxuICAgICAqL1xuICAgIGNvZGU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZ3VpZF1cbiAgICAgKi9cbiAgICBndWlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0RhdGV9IFtwbGFjZWRdXG4gICAgICovXG4gICAgcGxhY2VkPzogRGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsXVxuICAgICAqL1xuICAgIHRvdGFsPzogUHJpY2U7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYWdpbmF0aW9uTW9kZWwuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBhZ2luYXRpb25Nb2RlbCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbY3VycmVudFBhZ2VdXG4gICAgICovXG4gICAgY3VycmVudFBhZ2U/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGFnZVNpemVdXG4gICAgICovXG4gICAgcGFnZVNpemU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbc29ydF1cbiAgICAgKi9cbiAgICBzb3J0Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUGFnZXNdXG4gICAgICovXG4gICAgdG90YWxQYWdlcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbFJlc3VsdHNdXG4gICAgICovXG4gICAgdG90YWxSZXN1bHRzPzogbnVtYmVyO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU29ydE1vZGVsLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTb3J0TW9kZWwge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW3NlbGVjdGVkXVxuICAgICAqL1xuICAgIHNlbGVjdGVkPzogYm9vbGVhbjtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVySGlzdG9yeUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVySGlzdG9yeUxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVySGlzdG9yeVtdfSBbb3JkZXJzXVxuICAgICAqL1xuICAgIG9yZGVycz86IE9yZGVySGlzdG9yeVtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BhZ2luYXRpb25Nb2RlbH0gW3BhZ2luYXRpb25dXG4gICAgICovXG4gICAgcGFnaW5hdGlvbj86IFBhZ2luYXRpb25Nb2RlbDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTb3J0TW9kZWxbXX0gW3NvcnRzXVxuICAgICAqL1xuICAgIHNvcnRzPzogU29ydE1vZGVsW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnQuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIE9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbYmFzZVNpdGVJZF1cbiAgICAgKi9cbiAgICBiYXNlU2l0ZUlkPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgT3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJTdGF0dXNVcGRhdGVFbGVtZW50W119IFtvcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRzXVxuICAgICAqL1xuICAgIG9yZGVyU3RhdHVzVXBkYXRlRWxlbWVudHM/OiBPcmRlclN0YXR1c1VwZGF0ZUVsZW1lbnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIE9yZGVyLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBPcmRlciB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFthcHBsaWVkT3JkZXJQcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIGFwcGxpZWRPcmRlclByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25SZXN1bHRbXX0gW2FwcGxpZWRQcm9kdWN0UHJvbW90aW9uc11cbiAgICAgKi9cbiAgICBhcHBsaWVkUHJvZHVjdFByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtWb3VjaGVyW119IFthcHBsaWVkVm91Y2hlcnNdXG4gICAgICovXG4gICAgYXBwbGllZFZvdWNoZXJzPzogVm91Y2hlcltdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge2Jvb2xlYW59IFtjYWxjdWxhdGVkXVxuICAgICAqL1xuICAgIGNhbGN1bGF0ZWQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtDb25zaWdubWVudFtdfSBbY29uc2lnbm1lbnRzXVxuICAgICAqL1xuICAgIGNvbnNpZ25tZW50cz86IENvbnNpZ25tZW50W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGF0ZX0gW2NyZWF0ZWRdXG4gICAgICovXG4gICAgY3JlYXRlZD86IERhdGU7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QWRkcmVzc30gW2RlbGl2ZXJ5QWRkcmVzc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeUFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbZGVsaXZlcnlDb3N0XVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5Q29zdD86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2RlbGl2ZXJ5SXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBkZWxpdmVyeUl0ZW1zUXVhbnRpdHk/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7RGVsaXZlcnlNb2RlfSBbZGVsaXZlcnlNb2RlXVxuICAgICAqL1xuICAgIGRlbGl2ZXJ5TW9kZT86IERlbGl2ZXJ5TW9kZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtEZWxpdmVyeU9yZGVyRW50cnlHcm91cFtdfSBbZGVsaXZlcnlPcmRlckdyb3Vwc11cbiAgICAgKi9cbiAgICBkZWxpdmVyeU9yZGVyR3JvdXBzPzogRGVsaXZlcnlPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWxpdmVyeVN0YXR1c11cbiAgICAgKi9cbiAgICBkZWxpdmVyeVN0YXR1cz86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtkZWxpdmVyeVN0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgZGVsaXZlcnlTdGF0dXNEaXNwbGF5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge09yZGVyRW50cnlbXX0gW2VudHJpZXNdXG4gICAgICovXG4gICAgZW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtib29sZWFufSBbZ3Vlc3RDdXN0b21lcl1cbiAgICAgKi9cbiAgICBndWVzdEN1c3RvbWVyPzogYm9vbGVhbjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtndWlkXVxuICAgICAqL1xuICAgIGd1aWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7Ym9vbGVhbn0gW25ldF1cbiAgICAgKi9cbiAgICBuZXQ/OiBib29sZWFuO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbb3JkZXJEaXNjb3VudHNdXG4gICAgICovXG4gICAgb3JkZXJEaXNjb3VudHM/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYXltZW50RGV0YWlsc30gW3BheW1lbnRJbmZvXVxuICAgICAqL1xuICAgIHBheW1lbnRJbmZvPzogUGF5bWVudERldGFpbHM7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbcGlja3VwSXRlbXNRdWFudGl0eV1cbiAgICAgKi9cbiAgICBwaWNrdXBJdGVtc1F1YW50aXR5PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BpY2t1cE9yZGVyRW50cnlHcm91cFtdfSBbcGlja3VwT3JkZXJHcm91cHNdXG4gICAgICovXG4gICAgcGlja3VwT3JkZXJHcm91cHM/OiBQaWNrdXBPcmRlckVudHJ5R3JvdXBbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3Byb2R1Y3REaXNjb3VudHNdXG4gICAgICovXG4gICAgcHJvZHVjdERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3NpdGVdXG4gICAgICovXG4gICAgc2l0ZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdGF0dXNdXG4gICAgICovXG4gICAgc3RhdHVzPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0YXR1c0Rpc3BsYXldXG4gICAgICovXG4gICAgc3RhdHVzRGlzcGxheT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtzdG9yZV1cbiAgICAgKi9cbiAgICBzdG9yZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3N1YlRvdGFsXVxuICAgICAqL1xuICAgIHN1YlRvdGFsPzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJpY2V9IFt0b3RhbERpc2NvdW50c11cbiAgICAgKi9cbiAgICB0b3RhbERpc2NvdW50cz86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsSXRlbXNdXG4gICAgICovXG4gICAgdG90YWxJdGVtcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsUHJpY2VdXG4gICAgICovXG4gICAgdG90YWxQcmljZT86IFByaWNlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaWNlfSBbdG90YWxQcmljZVdpdGhUYXhdXG4gICAgICovXG4gICAgdG90YWxQcmljZVdpdGhUYXg/OiBQcmljZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmljZX0gW3RvdGFsVGF4XVxuICAgICAqL1xuICAgIHRvdGFsVGF4PzogUHJpY2U7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7T3JkZXJFbnRyeVtdfSBbdW5jb25zaWduZWRFbnRyaWVzXVxuICAgICAqL1xuICAgIHVuY29uc2lnbmVkRW50cmllcz86IE9yZGVyRW50cnlbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcmluY2lwYWx9IFt1c2VyXVxuICAgICAqL1xuICAgIHVzZXI/OiBQcmluY2lwYWw7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQYXltZW50RGV0YWlsc0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBheW1lbnREZXRhaWxzTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGF5bWVudERldGFpbHNbXX0gW3BheW1lbnRzXVxuICAgICAqL1xuICAgIHBheW1lbnRzPzogUGF5bWVudERldGFpbHNbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFBvaW50T2ZTZXJ2aWNlU3RvY2suXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFBvaW50T2ZTZXJ2aWNlU3RvY2sge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0FkZHJlc3N9IFthZGRyZXNzXVxuICAgICAqL1xuICAgIGFkZHJlc3M/OiBBZGRyZXNzO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rlc2NyaXB0aW9uXVxuICAgICAqL1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Rpc3BsYXlOYW1lXVxuICAgICAqL1xuICAgIGRpc3BsYXlOYW1lPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2Rpc3RhbmNlS21dXG4gICAgICovXG4gICAgZGlzdGFuY2VLbT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHt7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9fSBbZmVhdHVyZXNdXG4gICAgICovXG4gICAgZmVhdHVyZXM/OiB7IFtwcm9wZXJ0eU5hbWU6IHN0cmluZ106IHN0cmluZyB9O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2Zvcm1hdHRlZERpc3RhbmNlXVxuICAgICAqL1xuICAgIGZvcm1hdHRlZERpc3RhbmNlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0dlb1BvaW50fSBbZ2VvUG9pbnRdXG4gICAgICovXG4gICAgZ2VvUG9pbnQ/OiBHZW9Qb2ludDtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtJbWFnZX0gW21hcEljb25dXG4gICAgICovXG4gICAgbWFwSWNvbj86IEltYWdlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW25hbWVdXG4gICAgICovXG4gICAgbmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtPcGVuaW5nU2NoZWR1bGV9IFtvcGVuaW5nSG91cnNdXG4gICAgICovXG4gICAgb3BlbmluZ0hvdXJzPzogT3BlbmluZ1NjaGVkdWxlO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1N0b2NrfSBbc3RvY2tJbmZvXVxuICAgICAqL1xuICAgIHN0b2NrSW5mbz86IFN0b2NrO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N0b3JlQ29udGVudF1cbiAgICAgKi9cbiAgICBzdG9yZUNvbnRlbnQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7SW1hZ2VbXX0gW3N0b3JlSW1hZ2VzXVxuICAgICAqL1xuICAgIHN0b3JlSW1hZ2VzPzogSW1hZ2VbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt1cmxdXG4gICAgICovXG4gICAgdXJsPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NhdGFsb2dJZF1cbiAgICAgKi9cbiAgICBjYXRhbG9nSWQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2F0YWxvZ1ZlcnNpb25dXG4gICAgICovXG4gICAgY2F0YWxvZ1ZlcnNpb24/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY29kZV1cbiAgICAgKi9cbiAgICBjb2RlPzogc3RyaW5nO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdEV4cHJlc3NVcGRhdGVFbGVtZW50W119IFtwcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRzXVxuICAgICAqL1xuICAgIHByb2R1Y3RFeHByZXNzVXBkYXRlRWxlbWVudHM/OiBQcm9kdWN0RXhwcmVzc1VwZGF0ZUVsZW1lbnRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2F0YWxvZ11cbiAgICAgKi9cbiAgICBjYXRhbG9nPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2N1cnJlbnRQYWdlXVxuICAgICAqL1xuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3RbXX0gW3Byb2R1Y3RzXVxuICAgICAqL1xuICAgIHByb2R1Y3RzPzogUHJvZHVjdFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUGFnZUNvdW50XVxuICAgICAqL1xuICAgIHRvdGFsUGFnZUNvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3RvdGFsUHJvZHVjdENvdW50XVxuICAgICAqL1xuICAgIHRvdGFsUHJvZHVjdENvdW50PzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3ZlcnNpb25dXG4gICAgICovXG4gICAgdmVyc2lvbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RSZWZlcmVuY2VMaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0UmVmZXJlbmNlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdFJlZmVyZW5jZVtdfSBbcmVmZXJlbmNlc11cbiAgICAgKi9cbiAgICByZWZlcmVuY2VzPzogUHJvZHVjdFJlZmVyZW5jZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3BlbGxpbmdTdWdnZXN0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTcGVsbGluZ1N1Z2dlc3Rpb24ge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3F1ZXJ5XVxuICAgICAqL1xuICAgIHF1ZXJ5Pzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3N1Z2dlc3Rpb25dXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbj86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFByb2R1Y3RTZWFyY2hQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9kdWN0U2VhcmNoUGFnZSB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7QnJlYWRjcnVtYltdfSBbYnJlYWRjcnVtYnNdXG4gICAgICovXG4gICAgYnJlYWRjcnVtYnM/OiBCcmVhZGNydW1iW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbY2F0ZWdvcnlDb2RlXVxuICAgICAqL1xuICAgIGNhdGVnb3J5Q29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtTZWFyY2hTdGF0ZX0gW2N1cnJlbnRRdWVyeV1cbiAgICAgKi9cbiAgICBjdXJyZW50UXVlcnk/OiBTZWFyY2hTdGF0ZTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtGYWNldFtdfSBbZmFjZXRzXVxuICAgICAqL1xuICAgIGZhY2V0cz86IEZhY2V0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZnJlZVRleHRTZWFyY2hdXG4gICAgICovXG4gICAgZnJlZVRleHRTZWFyY2g/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBba2V5d29yZFJlZGlyZWN0VXJsXVxuICAgICAqL1xuICAgIGtleXdvcmRSZWRpcmVjdFVybD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9uTW9kZWx9IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvZHVjdFtdfSBbcHJvZHVjdHNdXG4gICAgICovXG4gICAgcHJvZHVjdHM/OiBQcm9kdWN0W107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydE1vZGVsW119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NwZWxsaW5nU3VnZ2VzdGlvbn0gW3NwZWxsaW5nU3VnZ2VzdGlvbl1cbiAgICAgKi9cbiAgICBzcGVsbGluZ1N1Z2dlc3Rpb24/OiBTcGVsbGluZ1N1Z2dlc3Rpb247XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBQcm9tb3Rpb25MaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBQcm9tb3Rpb25MaXN0IHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQcm9tb3Rpb25bXX0gW3Byb21vdGlvbnNdXG4gICAgICovXG4gICAgcHJvbW90aW9ucz86IFByb21vdGlvbltdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgUHJvbW90aW9uUmVzdWx0TGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgUHJvbW90aW9uUmVzdWx0TGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UHJvbW90aW9uUmVzdWx0W119IFtwcm9tb3Rpb25zXVxuICAgICAqL1xuICAgIHByb21vdGlvbnM/OiBQcm9tb3Rpb25SZXN1bHRbXTtcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFJldmlld0xpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFJldmlld0xpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Jldmlld1tdfSBbcmV2aWV3c11cbiAgICAgKi9cbiAgICByZXZpZXdzPzogUmV2aWV3W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTYXZlQ2FydFJlc3VsdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgU2F2ZUNhcnRSZXN1bHQge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge0NhcnR9IFtzYXZlZENhcnREYXRhXVxuICAgICAqL1xuICAgIHNhdmVkQ2FydERhdGE/OiBDYXJ0O1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3RvcmVGaW5kZXJTZWFyY2hQYWdlLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUZpbmRlclNlYXJjaFBhZ2Uge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kRWFzdExvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZEVhc3RMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmROb3J0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kTm9ydGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFNvdXRoTGF0aXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRTb3V0aExhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kV2VzdExvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZFdlc3RMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbbG9jYXRpb25UZXh0XVxuICAgICAqL1xuICAgIGxvY2F0aW9uVGV4dD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtQYWdpbmF0aW9uTW9kZWx9IFtwYWdpbmF0aW9uXVxuICAgICAqL1xuICAgIHBhZ2luYXRpb24/OiBQYWdpbmF0aW9uTW9kZWw7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U29ydE1vZGVsW119IFtzb3J0c11cbiAgICAgKi9cbiAgICBzb3J0cz86IFNvcnRNb2RlbFtdO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NvdXJjZUxhdGl0dWRlXVxuICAgICAqL1xuICAgIHNvdXJjZUxhdGl0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW3NvdXJjZUxvbmdpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMb25naXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UG9pbnRPZlNlcnZpY2VbXX0gW3N0b3Jlc11cbiAgICAgKi9cbiAgICBzdG9yZXM/OiBQb2ludE9mU2VydmljZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgU3RvcmVGaW5kZXJTdG9ja1NlYXJjaFBhZ2UuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFN0b3JlRmluZGVyU3RvY2tTZWFyY2hQYWdlIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZEVhc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRFYXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2JvdW5kTm9ydGhMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBib3VuZE5vcnRoTGF0aXR1ZGU/OiBudW1iZXI7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbYm91bmRTb3V0aExhdGl0dWRlXVxuICAgICAqL1xuICAgIGJvdW5kU291dGhMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtib3VuZFdlc3RMb25naXR1ZGVdXG4gICAgICovXG4gICAgYm91bmRXZXN0TG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2xvY2F0aW9uVGV4dF1cbiAgICAgKi9cbiAgICBsb2NhdGlvblRleHQ/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7UGFnaW5hdGlvbk1vZGVsfSBbcGFnaW5hdGlvbl1cbiAgICAgKi9cbiAgICBwYWdpbmF0aW9uPzogUGFnaW5hdGlvbk1vZGVsO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1Byb2R1Y3R9IFtwcm9kdWN0XVxuICAgICAqL1xuICAgIHByb2R1Y3Q/OiBQcm9kdWN0O1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1NvcnRNb2RlbFtdfSBbc29ydHNdXG4gICAgICovXG4gICAgc29ydHM/OiBTb3J0TW9kZWxbXTtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMYXRpdHVkZV1cbiAgICAgKi9cbiAgICBzb3VyY2VMYXRpdHVkZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtzb3VyY2VMb25naXR1ZGVdXG4gICAgICovXG4gICAgc291cmNlTG9uZ2l0dWRlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1BvaW50T2ZTZXJ2aWNlU3RvY2tbXX0gW3N0b3Jlc11cbiAgICAgKi9cbiAgICBzdG9yZXM/OiBQb2ludE9mU2VydmljZVN0b2NrW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBTdWdnZXN0aW9uLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uIHtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt2YWx1ZV1cbiAgICAgKi9cbiAgICB2YWx1ZT86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFN1Z2dlc3Rpb25MaXN0LlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBTdWdnZXN0aW9uTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7U3VnZ2VzdGlvbltdfSBbc3VnZ2VzdGlvbnNdXG4gICAgICovXG4gICAgc3VnZ2VzdGlvbnM/OiBTdWdnZXN0aW9uW107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBUaXRsZS5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVGl0bGUge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW2NvZGVdXG4gICAgICovXG4gICAgY29kZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBUaXRsZUxpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFRpdGxlTGlzdCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VGl0bGVbXX0gW3RpdGxlc11cbiAgICAgKi9cbiAgICB0aXRsZXM/OiBUaXRsZVtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVXNlckdyb3VwLlxuICAgKi9cbiAgZXhwb3J0IGludGVyZmFjZSBVc2VyR3JvdXAge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ByaW5jaXBhbFtdfSBbbWVtYmVyc11cbiAgICAgKi9cbiAgICBtZW1iZXJzPzogUHJpbmNpcGFsW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7bnVtYmVyfSBbbWVtYmVyc0NvdW50XVxuICAgICAqL1xuICAgIG1lbWJlcnNDb3VudD86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtuYW1lXVxuICAgICAqL1xuICAgIG5hbWU/OiBzdHJpbmc7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7VXNlckdyb3VwW119IFtzdWJHcm91cHNdXG4gICAgICovXG4gICAgc3ViR3JvdXBzPzogVXNlckdyb3VwW107XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbdWlkXVxuICAgICAqL1xuICAgIHVpZD86IHN0cmluZztcbiAgfVxuXG4gIC8qKlxuICAgKlxuICAgKiBBbiBpbnRlcmZhY2UgcmVwcmVzZW50aW5nIFVzZXJHcm91cExpc3QuXG4gICAqL1xuICBleHBvcnQgaW50ZXJmYWNlIFVzZXJHcm91cExpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW2N1cnJlbnRQYWdlXVxuICAgICAqL1xuICAgIGN1cnJlbnRQYWdlPzogbnVtYmVyO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge251bWJlcn0gW251bWJlck9mUGFnZXNdXG4gICAgICovXG4gICAgbnVtYmVyT2ZQYWdlcz86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFtwYWdlU2l6ZV1cbiAgICAgKi9cbiAgICBwYWdlU2l6ZT86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtudW1iZXJ9IFt0b3RhbE51bWJlcl1cbiAgICAgKi9cbiAgICB0b3RhbE51bWJlcj86IG51bWJlcjtcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtVc2VyR3JvdXBbXX0gW3VzZXJHcm91cHNdXG4gICAgICovXG4gICAgdXNlckdyb3Vwcz86IFVzZXJHcm91cFtdO1xuICB9XG5cbiAgLyoqXG4gICAqXG4gICAqIEFuIGludGVyZmFjZSByZXByZXNlbnRpbmcgVXNlclNpZ25VcC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVXNlclNpZ25VcCB7XG4gICAgLyoqXG4gICAgICogQG1lbWJlciB7c3RyaW5nfSBbZmlyc3ROYW1lXVxuICAgICAqL1xuICAgIGZpcnN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtsYXN0TmFtZV1cbiAgICAgKi9cbiAgICBsYXN0TmFtZT86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFtwYXNzd29yZF1cbiAgICAgKi9cbiAgICBwYXNzd29yZD86IHN0cmluZztcbiAgICAvKipcbiAgICAgKiBAbWVtYmVyIHtzdHJpbmd9IFt0aXRsZUNvZGVdXG4gICAgICovXG4gICAgdGl0bGVDb2RlPzogc3RyaW5nO1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge3N0cmluZ30gW3VpZF1cbiAgICAgKi9cbiAgICB1aWQ/OiBzdHJpbmc7XG4gIH1cblxuICBleHBvcnQgaW50ZXJmYWNlIFN0b3JlQ291bnQge1xuICAgIGNvdW50PzogbnVtYmVyO1xuICAgIGlzb0NvZGU/OiBzdHJpbmc7XG4gICAgbmFtZT86IHN0cmluZztcbiAgICB0eXBlPzogc3RyaW5nO1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBTdG9yZUNvdW50TGlzdCB7XG4gICAgY291bnRyaWVzQW5kUmVnaW9uc1N0b3JlQ291bnQ/OiBTdG9yZUNvdW50W107XG4gIH1cblxuICAvKipcbiAgICpcbiAgICogQW4gaW50ZXJmYWNlIHJlcHJlc2VudGluZyBWb3VjaGVyTGlzdC5cbiAgICovXG4gIGV4cG9ydCBpbnRlcmZhY2UgVm91Y2hlckxpc3Qge1xuICAgIC8qKlxuICAgICAqIEBtZW1iZXIge1ZvdWNoZXJbXX0gW3ZvdWNoZXJzXVxuICAgICAqL1xuICAgIHZvdWNoZXJzPzogVm91Y2hlcltdO1xuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBQcmljZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQlVZJywgJ0ZST00nXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IFByaWNlVHlwZSA9IDxQcmljZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBQcmljZVR5cGUge1xuICAgIEJVWSA9ICdCVVknLFxuICAgIEZST00gPSAnRlJPTScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEltYWdlVHlwZS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdQUklNQVJZJywgJ0dBTExFUlknXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEltYWdlVHlwZSA9IDxJbWFnZVR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBJbWFnZVR5cGUge1xuICAgIFBSSU1BUlkgPSAnUFJJTUFSWScsXG4gICAgR0FMTEVSWSA9ICdHQUxMRVJZJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzID0gPEZpZWxkcz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkcyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEgPSA8RmllbGRzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyID0gPEZpZWxkczI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMyA9IDxGaWVsZHMzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQgPSA8RmllbGRzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1ID0gPEZpZWxkczU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNiA9IDxGaWVsZHM2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgUGFnZVR5cGUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQ29udGVudFBhZ2UnLCAnUHJvZHVjdFBhZ2UnLCAnQ2F0ZWdvcnlQYWdlJyxcbiAgICogJ0NhdGFsb2dQYWdlJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBQYWdlVHlwZSA9IDxQYWdlVHlwZT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFBhZ2VUeXBlIHtcbiAgICBDT05URU5UX1BBR0UgPSAnQ29udGVudFBhZ2UnLFxuICAgIFBST0RVQ1RfUEFHRSA9ICdQcm9kdWN0UGFnZScsXG4gICAgQ0FURUdPUllfUEFHRSA9ICdDYXRlZ29yeVBhZ2UnLFxuICAgIENBVEFMT0dfUEFHRSA9ICdDYXRhbG9nUGFnZScsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM3ID0gPEZpZWxkczc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzOCA9IDxGaWVsZHM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczkgPSA8RmllbGRzOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTAgPSA8RmllbGRzMTA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxMSA9IDxGaWVsZHMxMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczExIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczEyID0gPEZpZWxkczEyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczEzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTMgPSA8RmllbGRzMTM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxNCA9IDxGaWVsZHMxND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE1ID0gPEZpZWxkczE1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTYgPSA8RmllbGRzMTY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgU29ydEVudW0uXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBTb3J0RW51bSA9IDxTb3J0RW51bT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIFNvcnRFbnVtIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMxNy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczE3ID0gPEZpZWxkczE3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMTcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczE4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMTggPSA8RmllbGRzMTg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMxOCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMTkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMxOSA9IDxGaWVsZHMxOT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczE5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIwID0gPEZpZWxkczIwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczIxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjEgPSA8RmllbGRzMjE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyMSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyMiA9IDxGaWVsZHMyMj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczIyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyMy5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczIzID0gPEZpZWxkczIzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjQgPSA8RmllbGRzMjQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyNSA9IDxGaWVsZHMyNT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyNi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI2ID0gPEZpZWxkczI2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczI3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMjcgPSA8RmllbGRzMjc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMyNyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMjguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMyOCA9IDxGaWVsZHMyOD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczI4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMyOS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczI5ID0gPEZpZWxkczI5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMjkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzAgPSA8RmllbGRzMzA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzMSA9IDxGaWVsZHMzMT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczMxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzMi5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczMyID0gPEZpZWxkczMyPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzIge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczMzLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzMgPSA8RmllbGRzMzM+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzMyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzQuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNCA9IDxGaWVsZHMzND5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM0IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzNS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM1ID0gPEZpZWxkczM1Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzUge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM2LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzYgPSA8RmllbGRzMzY+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzNiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzMzcuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHMzNyA9IDxGaWVsZHMzNz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczM3IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHMzOC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczM4ID0gPEZpZWxkczM4Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzMzgge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczM5LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzMzkgPSA8RmllbGRzMzk+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHMzOSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDAuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MCA9IDxGaWVsZHM0MD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQwIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0MS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQxID0gPEZpZWxkczQxPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDEge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQyLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDIgPSA8RmllbGRzNDI+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0MiB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDMuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0MyA9IDxGaWVsZHM0Mz5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQzIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0NC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ0ID0gPEZpZWxkczQ0Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDQge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ1LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDUgPSA8RmllbGRzNDU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0NSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDYuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0NiA9IDxGaWVsZHM0Nj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ2IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM0Ny5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczQ3ID0gPEZpZWxkczQ3Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNDcge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczQ4LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNDggPSA8RmllbGRzNDg+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM0OCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNDkuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM0OSA9IDxGaWVsZHM0OT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczQ5IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1MC5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUwID0gPEZpZWxkczUwPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTAge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczUxLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTEgPSA8RmllbGRzNTE+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1MSB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTIuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1MiA9IDxGaWVsZHM1Mj5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczUyIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1My5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczUzID0gPEZpZWxkczUzPlwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTMge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU0LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTQgPSA8RmllbGRzNTQ+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTUuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1NSA9IDxGaWVsZHM1NT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU1IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1Ni5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU2ID0gPEZpZWxkczU2Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTYge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczU3LlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNTcgPSA8RmllbGRzNTc+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM1NyB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNTguXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM1OCA9IDxGaWVsZHM1OD5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczU4IHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBGaWVsZHM1OS5cbiAgICogUG9zc2libGUgdmFsdWVzIGluY2x1ZGU6ICdCQVNJQycsICdERUZBVUxUJywgJ0ZVTEwnXG4gICAqIFRoZXJlIGNvdWxkIGJlIG1vcmUgdmFsdWVzIGZvciB0aGlzIGVudW0gYXBhcnQgZnJvbSB0aGUgb25lcyBkZWZpbmVkIGhlcmUuSWZcbiAgICogeW91IHdhbnQgdG8gc2V0IGEgdmFsdWUgdGhhdCBpcyBub3QgZnJvbSB0aGUga25vd24gdmFsdWVzIHRoZW4geW91IGNhbiBkb1xuICAgKiB0aGUgZm9sbG93aW5nOlxuICAgKiBsZXQgcGFyYW06IEZpZWxkczU5ID0gPEZpZWxkczU5Plwic29tZVVua25vd25WYWx1ZVRoYXRXaWxsU3RpbGxCZVZhbGlkXCI7XG4gICAqIEByZWFkb25seVxuICAgKiBAZW51bSB7c3RyaW5nfVxuICAgKi9cbiAgZXhwb3J0IGVudW0gRmllbGRzNTkge1xuICAgIEJBU0lDID0gJ0JBU0lDJyxcbiAgICBERUZBVUxUID0gJ0RFRkFVTFQnLFxuICAgIEZVTEwgPSAnRlVMTCcsXG4gIH1cblxuICAvKipcbiAgICogRGVmaW5lcyB2YWx1ZXMgZm9yIEZpZWxkczYwLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ0JBU0lDJywgJ0RFRkFVTFQnLCAnRlVMTCdcbiAgICogVGhlcmUgY291bGQgYmUgbW9yZSB2YWx1ZXMgZm9yIHRoaXMgZW51bSBhcGFydCBmcm9tIHRoZSBvbmVzIGRlZmluZWQgaGVyZS5JZlxuICAgKiB5b3Ugd2FudCB0byBzZXQgYSB2YWx1ZSB0aGF0IGlzIG5vdCBmcm9tIHRoZSBrbm93biB2YWx1ZXMgdGhlbiB5b3UgY2FuIGRvXG4gICAqIHRoZSBmb2xsb3dpbmc6XG4gICAqIGxldCBwYXJhbTogRmllbGRzNjAgPSA8RmllbGRzNjA+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBGaWVsZHM2MCB7XG4gICAgQkFTSUMgPSAnQkFTSUMnLFxuICAgIERFRkFVTFQgPSAnREVGQVVMVCcsXG4gICAgRlVMTCA9ICdGVUxMJyxcbiAgfVxuXG4gIC8qKlxuICAgKiBEZWZpbmVzIHZhbHVlcyBmb3IgRmllbGRzNjEuXG4gICAqIFBvc3NpYmxlIHZhbHVlcyBpbmNsdWRlOiAnQkFTSUMnLCAnREVGQVVMVCcsICdGVUxMJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBGaWVsZHM2MSA9IDxGaWVsZHM2MT5cInNvbWVVbmtub3duVmFsdWVUaGF0V2lsbFN0aWxsQmVWYWxpZFwiO1xuICAgKiBAcmVhZG9ubHlcbiAgICogQGVudW0ge3N0cmluZ31cbiAgICovXG4gIGV4cG9ydCBlbnVtIEZpZWxkczYxIHtcbiAgICBCQVNJQyA9ICdCQVNJQycsXG4gICAgREVGQVVMVCA9ICdERUZBVUxUJyxcbiAgICBGVUxMID0gJ0ZVTEwnLFxuICB9XG5cbiAgLyoqXG4gICAqIERlZmluZXMgdmFsdWVzIGZvciBUeXBlLlxuICAgKiBQb3NzaWJsZSB2YWx1ZXMgaW5jbHVkZTogJ2FsbCcsICdwcm9kdWN0JywgJ29yZGVyJ1xuICAgKiBUaGVyZSBjb3VsZCBiZSBtb3JlIHZhbHVlcyBmb3IgdGhpcyBlbnVtIGFwYXJ0IGZyb20gdGhlIG9uZXMgZGVmaW5lZCBoZXJlLklmXG4gICAqIHlvdSB3YW50IHRvIHNldCBhIHZhbHVlIHRoYXQgaXMgbm90IGZyb20gdGhlIGtub3duIHZhbHVlcyB0aGVuIHlvdSBjYW4gZG9cbiAgICogdGhlIGZvbGxvd2luZzpcbiAgICogbGV0IHBhcmFtOiBUeXBlID0gPFR5cGU+XCJzb21lVW5rbm93blZhbHVlVGhhdFdpbGxTdGlsbEJlVmFsaWRcIjtcbiAgICogQHJlYWRvbmx5XG4gICAqIEBlbnVtIHtzdHJpbmd9XG4gICAqL1xuICBleHBvcnQgZW51bSBUeXBlIHtcbiAgICBBbGwgPSAnYWxsJyxcbiAgICBQcm9kdWN0ID0gJ3Byb2R1Y3QnLFxuICAgIE9yZGVyID0gJ29yZGVyJyxcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFRlbXBsYXRlIHtcbiAgICBpZD86IHN0cmluZztcbiAgICBuYW1lPzogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uPzogc3RyaW5nO1xuICAgIHZlcnNpb24/OiBudW1iZXI7XG4gICAgY3VycmVudENvbnNlbnQ/OiBDb25zZW50O1xuICB9XG5cbiAgZXhwb3J0IGludGVyZmFjZSBDb25zZW50IHtcbiAgICBjb2RlPzogc3RyaW5nO1xuICAgIGNvbnNlbnRHaXZlbkRhdGU/OiBEYXRlO1xuICAgIGNvbnNlbnRXaXRoZHJhd25EYXRlPzogRGF0ZTtcbiAgfVxuXG4gIGV4cG9ydCBpbnRlcmZhY2UgQ29uc2VudFRlbXBsYXRlTGlzdCB7XG4gICAgY29uc2VudFRlbXBsYXRlcz86IENvbnNlbnRUZW1wbGF0ZVtdO1xuICB9XG59XG4iXX0=