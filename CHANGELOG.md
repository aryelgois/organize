# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## Unreleased

### Added
- Components:
  - `EmptystateComponent`
  - `ImageViewerComponent`
  - `InputMessageComponent`
  - `ProductItemComponent`
  - `QrScannerComponent`
  - `UserAvatarComponent`
- Dependencies:
  - [clipboard]
  - [qrcode]
- Guards:
  - `NotFoundGuard`
  - `WelcomeGuard`
- Icons:
  - `md-anonymous-off`
  - `md-qr-code`
  - `md-qr-code-off`
  - `md-qr-scanner`
  - `qr-scanner-corner`
  - From [material.io][material-icons]:
    - `md-anonymous` (account_circle)
    - `md-link`
    - `md-link-off`
    - `md-report`
- Models:
  - `AbstractProduct`
  - `Keyword`
  - `List`
  - `Person`
  - `Product`
  - `ProductSearchResult`
  - `QrScan`
  - `User`
- Pages:
  - `AboutPage`
  - `AboutPrivacyPage`
  - `AboutTermsPage`
  - `EditListPage`
  - `EditProductPage`
  - `InvitePage`
  - `JoinPage`
  - `ListAccessPage`
  - `ListQrCodePage`
  - `ListQrScannerPage`
  - `ListsPage`
  - `LoginPage`
  - `NewKeywordPage`
  - `NotFoundPage`
  - `ProductKeywordsPage`
  - `ProductsPage`
  - `RecoverLoginPage`
  - `ShareListPage`
  - `WelcomePage`
- Type guards:
  - `isProduct`
- Types:
  - `AnyProduct`
- Miscellaneous:
  - File with app version

### Changed
- Default `ListPage` now shows `List` products

### Deprecated

### Removed
- Default `HomePage`

### Fixed

### Security


[clipboard]: https://www.npmjs.com/package/clipboard
[qrcode]: https://www.npmjs.com/package/qrcode

[material-icons]: https://material.io/tools/icons
