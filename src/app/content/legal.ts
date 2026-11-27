// Privacy Policy and Terms of Use are published here VERBATIM from the owner
// (Mila Veenstra, documents dated November 27, 2026). Only markup is added:
// "## " for section headings and "### " for the bold contact labels. Never paraphrase.
// The documents' header line (effective date and operator) is not shown: the site
// never prints a document date; the operator is named in the last section.

export type LegalDoc = {
  title: string;
  body: string | null;
  other: { to: string; label: string };
};

export const privacy: LegalDoc = {
  title: "Privacy Policy",
  other: { to: "/terms", label: "Terms of Use" },
  body: `This Privacy Policy explains how Mila Veenstra, an individual located in Rotterdam, the Netherlands ("Operator", "we", "us" or "our"), handles information when you use the mobile software application (the "Application"). It describes information processed locally, data handled by integrated service providers, and your privacy choices and rights.

## 1.  Controller and basic architecture

Mila Veenstra is the controller responsible for personal data processed for the operation of the Application, where applicable data-protection law treats us as a controller. The Application does not require registration or a user account. We do not operate a remote application backend, use Firebase, provide an AI chat or AI-generation service, or use a separate general-purpose analytics platform. Apphud supports purchase processing and subscription-related analytics and entitlements; Apple provides platform and weather services.

## 2.  Information processed and how it is used

Connected devices and local network. The Application discovers and connects to compatible televisions and smart devices using local network information, including relevant IP addresses, and available Wi-Fi, multicast, Bluetooth and HomeKit functionality. Information about connected devices is stored locally so you can access them again. We do not collect a history of connections or store a separate history of control settings.

Location for weather. With your permission, location data is used to request and display local weather through Apple WeatherKit. The location may be precise or approximate depending on your device settings. We do not retain a location history or store the coordinates in an Operator-controlled database. Location information needed to obtain a forecast is processed in connection with Apple’s weather service, subject to Apple’s applicable privacy terms.

Media access and screen broadcasting. When you select photos or videos for casting, copies may be placed in a temporary local folder during playback and are removed after the playback ends. The Application can stream selected media, music or screen broadcasts to compatible devices over the local network, including through a temporary server running locally. We do not upload this media to Operator-operated remote servers or permanently store temporary playback copies. Access to Apple Music, where used, is subject to Apple’s service arrangements.

Email contact. If you contact support using the system mail composer, your device may prefill the sending email address from its existing settings. The Application does not separately collect or store that address. If you actually send an email, its contents and sender information are processed by your chosen mail provider and received by us to respond to your inquiry; we may retain that correspondence as reasonably needed for support and legal obligations.

Purchases and technical identifiers. App Store billing and Apphud are used to manage subscriptions (with or without trials) and a one-time Lifetime purchase. In that context, Apphud receives an Identifier for Vendor (IDFV), an Apphud user identifier and relevant purchase/entitlement information. Apphud may also process ordinary SDK technical information, such as device details and the network IP address associated with requests. This processing is separate from the local IP-address use for discovering televisions. We do not receive your full payment-card details from Apple.

## 3.  Why we process information and legal bases

We use necessary device and purchase information to deliver the Application and paid entitlements (performance of a contract), to support secure and reliable operation and respond to support requests (legitimate interests, where appropriate), and to comply with tax, consumer or other legal obligations. Location access is controlled through your device permissions; where consent is the required legal basis, you may withdraw it through your device settings. Processing for support correspondence depends on the inquiry and the applicable legal basis.

## 4.  Permissions and your choices

Depending on the features you choose, the Application may request Local Network, Bluetooth, HomeKit, location while in use, media-library or photo/video access and screen-broadcasting access. It may also use Wi-Fi information, multicast networking, Apple Music/Media Library, WeatherKit, audio background operation and App Groups as system capabilities. Some of these are technical entitlements rather than separate permission prompts. You can change permissions in your phone settings, although denying access may disable relevant features.

## 5.  Recipients and external services

Data are shared only insofar as necessary for the features described above: (a) Apple, for App Store transactions, relevant platform services and WeatherKit; (b) Apphud, for subscription, in-app purchase and entitlement functionality; (c) compatible devices on your local network, to receive commands or media you choose to transmit; and (d) email-service providers when you contact us. We do not run a remote media-upload service, and we do not sell your personal data. Each external provider may process data under its own applicable terms and privacy notices.

## 6.  Storage and retention

Connected-device information remains on your phone for ongoing functionality and can generally be removed by removing devices or uninstalling the Application. Temporary playback files are deleted after use. We do not keep connection histories, control-setting histories or stored location histories. Apphud and Apple retain purchase-related records according to their respective practices and any legal retention duties. Support emails, if sent, may be retained for as long as reasonably necessary to respond, maintain records or meet legal obligations.

## 7.  International handling and security

The Application is available in multiple countries. External service providers may process information in locations outside your country, including outside the European Economic Area, subject to applicable safeguards where required. We use reasonable technical and organizational measures suited to the limited information we handle, but no network or device environment can be guaranteed completely secure. Protect access to your phone, home network and connected equipment.

## 8.  Your privacy rights

Where the EU/EEA General Data Protection Regulation or comparable law applies, you may have rights to access, correct, erase, restrict or object to processing of personal data, and to receive data in a portable format where applicable. You may also withdraw consent where consent is relied upon, without affecting prior lawful processing. Contact us using the email below and describe your request. Some data are held only on your phone or by third-party service providers, so we may direct you to relevant device settings or provider controls where appropriate.

You can also lodge a complaint with a competent supervisory authority, including the Dutch Data Protection Authority (Autoriteit Persoonsgegevens), without affecting other available rights or remedies.

## 9.  Children and family use

The Application is a general-purpose tool for device control and is not designed to create profiles of children or solicit personal details from them. Children should use connected-home controls with appropriate parent or guardian supervision. We do not knowingly maintain child-specific user accounts.

## 10.  Signed brand authorization

Use of the SmartThings name, trademarks and applicable brand elements in connection with the Application is based on a signed trademark license and brand authorization agreement with Samsung Electronics Co., Ltd. This brand authorization does not, by itself, make Samsung the operator of the Application or the controller of personal data described in this Policy. The Operator remains responsible for the processing described here, subject to the separate responsibilities of the service providers identified above.

## 11.  Changes to this Policy

We may update this Policy when functionality, third-party services or legal requirements change. The latest version will be made available through the Application or its associated listing, and significant changes will be communicated where required by law.

## 12.  Contact and operator details

### Controller

Mila Veenstra (individual)

### Address

Diepenbrocklaan 76, 3055 WC Rotterdam, Netherlands

### Privacy & support

thijsvries1app@hotmail.com`,
};

export const terms: LegalDoc = {
  title: "Terms of Use",
  other: { to: "/privacy", label: "Privacy Policy" },
  body: `These Terms of Use ("Terms") govern access to and use of the mobile software application (the "Application") made available by Mila Veenstra, an individual based in Rotterdam, the Netherlands ("Operator", "we", "us" or "our"). By using the Application, you agree to these Terms. If you do not agree, do not use the Application.

## 1.  What the Application does

The Application provides a convenient interface for controlling compatible smart-home and entertainment devices, which may include televisions, air conditioners, LED lighting and smart speakers. Depending on the device, available tools may include navigation, channel and volume controls, environmental adjustments, device discovery, and playback or display of selected media. Some features use local network connections, Wi-Fi information, Bluetooth, HomeKit, Apple Music, WeatherKit or screen broadcasting capabilities.

Functionality depends on compatible equipment, operating-system permissions, third-party services, local network conditions and device configuration. No particular device, brand, protocol or feature is guaranteed to work in every environment. The Application does not itself replace a manufacturer’s official software or safety controls.

## 2.  Eligibility and permitted use

The Application does not require user registration or an account. You may use it for lawful personal purposes on devices that you own or are authorized to control. If a minor uses the Application, a parent or guardian should supervise its use and any control of connected home equipment.

You must not attempt unauthorized access to devices or networks; interfere with other users or equipment; misuse the Application to circumvent security restrictions; reverse engineer the Application except where applicable law permits; or use it in a way that infringes third-party rights. You remain responsible for the devices, networks and media content you choose to connect, control or transmit.

## 3.  Connectivity, permissions and device operation

Certain features require permission to discover or communicate with nearby devices, access local network information, use Bluetooth or HomeKit, access selected media, or obtain location for local weather. Features involving audio, AirPlay, Picture in Picture, or screen broadcasting may run in the background where permitted by the operating system. If a permission is refused or revoked, the affected feature may be unavailable.

Compatible media may be temporarily copied to device-local storage during playback or casting and removed after playback. Screen mirroring and broadcasting may rely on a server operating locally on your phone or home network; this is not a remote hosting service operated by us. You must have the necessary rights to any media you transmit.

## 4.  Paid features, subscriptions and Lifetime purchase

The Application currently offers auto-renewable subscriptions, some with a free trial and others without a trial, and a one-time "Lifetime" in-app purchase. Actual prices, subscription periods, trial eligibility, covered features and conditions are shown in the purchase interface before confirmation. Payment is processed through Apple’s App Store, not by the Operator directly. We use Apphud to support purchase status and entitlement management.

Subscriptions renew automatically at the applicable price unless canceled before the next renewal. A free trial, where offered and available to you, converts to a paid subscription unless you cancel before the trial ends. You can manage or cancel subscriptions in your Apple Account subscription settings; deleting the Application does not cancel a subscription. Billing, refunds and purchase restoration are subject to applicable Apple policies and mandatory consumer rights.

"Lifetime" means a one-time entitlement to the premium access specified in the relevant offer for the operational lifetime of the Application, subject to continuing technical availability, applicable law and consumer rights. It is not a promise that the Application or any third-party platform will operate indefinitely. We may change or discontinue offers in the future; any change affecting an existing purchase will be handled in accordance with applicable law and App Store rules.

## 5.  Third-party services and external equipment

The Application may interoperate with services and technologies supplied by Apple and device manufacturers, including HomeKit, Apple Music, WeatherKit and connected home equipment. Their separate terms, privacy notices, subscription requirements and service availability may apply. We do not control third-party outages, firmware updates, product compatibility, weather forecasts or the operation of external devices.

Do not rely exclusively on the Application for emergency functions, safety-critical equipment, secure entry, medical equipment or situations where device failure could cause injury or material damage. Verify important actions directly on the relevant device where appropriate.

## 6.  Signed brand authorization

Use of the SmartThings name, trademarks and applicable brand elements in connection with the Application is based on a signed trademark license and brand authorization agreement with Samsung Electronics Co., Ltd. Any such use remains within the scope of the rights granted by that agreement. The Application is operated by Mila Veenstra; the brand authorization does not, by itself, mean that Samsung operates the Application, provides its customer support or assumes responsibility under these Terms.

## 7.  Intellectual property

The Application, its software, original interface elements, text and associated materials are protected by applicable intellectual-property laws. Subject to these Terms and applicable platform rules, you receive a limited, non-exclusive, non-transferable and revocable right to use the Application for its intended purpose. All third-party trademarks, product names, logos and other protected materials remain the property of their respective owners.

## 8.  Availability, changes and support

We may release updates, modify features, correct errors or stop supporting particular devices, integrations or operating-system versions. Internet connectivity, third-party changes and technical issues can affect availability. We will not intentionally override any statutory entitlement or consumer remedy through a product change. Questions and support requests may be sent to thijsvries1app@hotmail.com.

## 9.  Disclaimer and limits of liability

To the extent permitted by applicable law, the Application is supplied on an "as available" basis, and we do not guarantee uninterrupted operation, universal device compatibility, error-free media streaming or the accuracy of third-party weather information. Nothing in these Terms excludes or limits liability for fraud, willful misconduct, personal injury caused by negligence where such exclusion is prohibited, or any consumer rights or remedies that cannot lawfully be restricted.

Subject to those safeguards, we are not responsible for losses caused solely by third-party service interruptions, incompatible devices, unauthorized network use or incorrect device configuration beyond our reasonable control.

## 10.  Suspension and termination

You may stop using the Application at any time. We may restrict misuse that threatens security, rights of others or the integrity of the service, subject to applicable law. Ending use does not automatically cancel an App Store subscription, and any paid entitlements or refunds remain governed by the purchase terms and mandatory law.

## 11.  Applicable law and consumer protection

These Terms are governed by the laws of the Netherlands, without depriving consumers of mandatory protections available under the laws of their country of habitual residence where applicable. Any dispute may be brought before a court having jurisdiction under applicable consumer-protection and private-international-law rules.

## 12.  Updates to these Terms

We may revise these Terms to reflect legal, operational or feature changes. The updated version will be made available through the Application or its associated listing, with an updated effective date. Where required by law, material changes will be brought to your attention before taking effect.

## 13.  Operator and contact

### Operator

Mila Veenstra (individual)

### Address

Diepenbrocklaan 76, 3055 WC Rotterdam, Netherlands

### Support email

thijsvries1app@hotmail.com`,
};
