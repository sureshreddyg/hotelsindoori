
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
type HydrationStrategies = {
  hydrateOnVisible?: IntersectionObserverInit | true
  hydrateOnIdle?: number | true
  hydrateOnInteraction?: keyof HTMLElementEventMap | Array<keyof HTMLElementEventMap> | true
  hydrateOnMediaQuery?: string
  hydrateAfter?: number
  hydrateWhen?: boolean
  hydrateNever?: true
}
type LazyComponent<T> = (T & DefineComponent<HydrationStrategies, {}, {}, {}, {}, {}, {}, { hydrated: () => void }>)
interface _GlobalComponents {
      'ElementsBackToTop': typeof import("../components/elements/BackToTop.vue")['default']
    'ElementsCounterUp': typeof import("../components/elements/CounterUp.vue")['default']
    'ElementsModalVideo': typeof import("../components/elements/ModalVideo.vue")['default']
    'LayoutFooter1': typeof import("../components/layout/Footer1.vue")['default']
    'LayoutFooter2': typeof import("../components/layout/Footer2.vue")['default']
    'LayoutHeader1': typeof import("../components/layout/Header1.vue")['default']
    'LayoutHeader2': typeof import("../components/layout/Header2.vue")['default']
    'LayoutMenu': typeof import("../components/layout/Menu.vue")['default']
    'LayoutMobileMenu': typeof import("../components/layout/MobileMenu.vue")['default']
    'LayoutPageTitle': typeof import("../components/layout/PageTitle.vue")['default']
    'SectionsHome1About': typeof import("../components/sections/home1/About.vue")['default']
    'SectionsHome1Booking': typeof import("../components/sections/home1/Booking.vue")['default']
    'SectionsHome1Features': typeof import("../components/sections/home1/Features.vue")['default']
    'SectionsHome1News': typeof import("../components/sections/home1/News.vue")['default']
    'SectionsHome1Pricing': typeof import("../components/sections/home1/Pricing.vue")['default']
    'SectionsHome1Room': typeof import("../components/sections/home1/Room.vue")['default']
    'SectionsHome1Services': typeof import("../components/sections/home1/Services.vue")['default']
    'SectionsHome1Slider': typeof import("../components/sections/home1/Slider.vue")['default']
    'SectionsHome1Team': typeof import("../components/sections/home1/Team.vue")['default']
    'SectionsHome1Testimonial': typeof import("../components/sections/home1/Testimonial.vue")['default']
    'SectionsHome1Video': typeof import("../components/sections/home1/Video.vue")['default']
    'SectionsHome2About': typeof import("../components/sections/home2/About.vue")['default']
    'SectionsHome2Booking': typeof import("../components/sections/home2/Booking.vue")['default']
    'SectionsHome2Clients': typeof import("../components/sections/home2/Clients.vue")['default']
    'SectionsHome2Features': typeof import("../components/sections/home2/Features.vue")['default']
    'SectionsHome2News': typeof import("../components/sections/home2/News.vue")['default']
    'SectionsHome2Offer': typeof import("../components/sections/home2/Offer.vue")['default']
    'SectionsHome2Pricing': typeof import("../components/sections/home2/Pricing.vue")['default']
    'SectionsHome2Services': typeof import("../components/sections/home2/Services.vue")['default']
    'SectionsHome2Slider': typeof import("../components/sections/home2/Slider.vue")['default']
    'SectionsHome2Testimonial': typeof import("../components/sections/home2/Testimonial.vue")['default']
    'SectionsHome2Video': typeof import("../components/sections/home2/Video.vue")['default']
    'SectionsInnerpagesAbout': typeof import("../components/sections/innerpages/About.vue")['default']
    'SectionsInnerpagesContact': typeof import("../components/sections/innerpages/Contact.vue")['default']
    'SectionsInnerpagesNewsdetails': typeof import("../components/sections/innerpages/Newsdetails.vue")['default']
    'SectionsInnerpagesNewsgrid': typeof import("../components/sections/innerpages/Newsgrid.vue")['default']
    'SectionsInnerpagesPricing': typeof import("../components/sections/innerpages/Pricing.vue")['default']
    'SectionsInnerpagesRooms': typeof import("../components/sections/innerpages/Rooms.vue")['default']
    'SectionsInnerpagesRoomsdetails': typeof import("../components/sections/innerpages/Roomsdetails.vue")['default']
    'SectionsInnerpagesRoomsuite': typeof import("../components/sections/innerpages/Roomsuite.vue")['default']
    'SectionsInnerpagesTeamdetails': typeof import("../components/sections/innerpages/Teamdetails.vue")['default']
    'SectionsInnerpagesTeamgrid': typeof import("../components/sections/innerpages/Teamgrid.vue")['default']
    'SectionsInnerpagesTestimonial': typeof import("../components/sections/innerpages/Testimonial.vue")['default']
    'SectionsInnerpagesTestimonial2': typeof import("../components/sections/innerpages/Testimonial2.vue")['default']
    'NuxtWelcome': typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
    'NuxtLayout': typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyElementsBackToTop': LazyComponent<typeof import("../components/elements/BackToTop.vue")['default']>
    'LazyElementsCounterUp': LazyComponent<typeof import("../components/elements/CounterUp.vue")['default']>
    'LazyElementsModalVideo': LazyComponent<typeof import("../components/elements/ModalVideo.vue")['default']>
    'LazyLayoutFooter1': LazyComponent<typeof import("../components/layout/Footer1.vue")['default']>
    'LazyLayoutFooter2': LazyComponent<typeof import("../components/layout/Footer2.vue")['default']>
    'LazyLayoutHeader1': LazyComponent<typeof import("../components/layout/Header1.vue")['default']>
    'LazyLayoutHeader2': LazyComponent<typeof import("../components/layout/Header2.vue")['default']>
    'LazyLayoutMenu': LazyComponent<typeof import("../components/layout/Menu.vue")['default']>
    'LazyLayoutMobileMenu': LazyComponent<typeof import("../components/layout/MobileMenu.vue")['default']>
    'LazyLayoutPageTitle': LazyComponent<typeof import("../components/layout/PageTitle.vue")['default']>
    'LazySectionsHome1About': LazyComponent<typeof import("../components/sections/home1/About.vue")['default']>
    'LazySectionsHome1Booking': LazyComponent<typeof import("../components/sections/home1/Booking.vue")['default']>
    'LazySectionsHome1Features': LazyComponent<typeof import("../components/sections/home1/Features.vue")['default']>
    'LazySectionsHome1News': LazyComponent<typeof import("../components/sections/home1/News.vue")['default']>
    'LazySectionsHome1Pricing': LazyComponent<typeof import("../components/sections/home1/Pricing.vue")['default']>
    'LazySectionsHome1Room': LazyComponent<typeof import("../components/sections/home1/Room.vue")['default']>
    'LazySectionsHome1Services': LazyComponent<typeof import("../components/sections/home1/Services.vue")['default']>
    'LazySectionsHome1Slider': LazyComponent<typeof import("../components/sections/home1/Slider.vue")['default']>
    'LazySectionsHome1Team': LazyComponent<typeof import("../components/sections/home1/Team.vue")['default']>
    'LazySectionsHome1Testimonial': LazyComponent<typeof import("../components/sections/home1/Testimonial.vue")['default']>
    'LazySectionsHome1Video': LazyComponent<typeof import("../components/sections/home1/Video.vue")['default']>
    'LazySectionsHome2About': LazyComponent<typeof import("../components/sections/home2/About.vue")['default']>
    'LazySectionsHome2Booking': LazyComponent<typeof import("../components/sections/home2/Booking.vue")['default']>
    'LazySectionsHome2Clients': LazyComponent<typeof import("../components/sections/home2/Clients.vue")['default']>
    'LazySectionsHome2Features': LazyComponent<typeof import("../components/sections/home2/Features.vue")['default']>
    'LazySectionsHome2News': LazyComponent<typeof import("../components/sections/home2/News.vue")['default']>
    'LazySectionsHome2Offer': LazyComponent<typeof import("../components/sections/home2/Offer.vue")['default']>
    'LazySectionsHome2Pricing': LazyComponent<typeof import("../components/sections/home2/Pricing.vue")['default']>
    'LazySectionsHome2Services': LazyComponent<typeof import("../components/sections/home2/Services.vue")['default']>
    'LazySectionsHome2Slider': LazyComponent<typeof import("../components/sections/home2/Slider.vue")['default']>
    'LazySectionsHome2Testimonial': LazyComponent<typeof import("../components/sections/home2/Testimonial.vue")['default']>
    'LazySectionsHome2Video': LazyComponent<typeof import("../components/sections/home2/Video.vue")['default']>
    'LazySectionsInnerpagesAbout': LazyComponent<typeof import("../components/sections/innerpages/About.vue")['default']>
    'LazySectionsInnerpagesContact': LazyComponent<typeof import("../components/sections/innerpages/Contact.vue")['default']>
    'LazySectionsInnerpagesNewsdetails': LazyComponent<typeof import("../components/sections/innerpages/Newsdetails.vue")['default']>
    'LazySectionsInnerpagesNewsgrid': LazyComponent<typeof import("../components/sections/innerpages/Newsgrid.vue")['default']>
    'LazySectionsInnerpagesPricing': LazyComponent<typeof import("../components/sections/innerpages/Pricing.vue")['default']>
    'LazySectionsInnerpagesRooms': LazyComponent<typeof import("../components/sections/innerpages/Rooms.vue")['default']>
    'LazySectionsInnerpagesRoomsdetails': LazyComponent<typeof import("../components/sections/innerpages/Roomsdetails.vue")['default']>
    'LazySectionsInnerpagesRoomsuite': LazyComponent<typeof import("../components/sections/innerpages/Roomsuite.vue")['default']>
    'LazySectionsInnerpagesTeamdetails': LazyComponent<typeof import("../components/sections/innerpages/Teamdetails.vue")['default']>
    'LazySectionsInnerpagesTeamgrid': LazyComponent<typeof import("../components/sections/innerpages/Teamgrid.vue")['default']>
    'LazySectionsInnerpagesTestimonial': LazyComponent<typeof import("../components/sections/innerpages/Testimonial.vue")['default']>
    'LazySectionsInnerpagesTestimonial2': LazyComponent<typeof import("../components/sections/innerpages/Testimonial2.vue")['default']>
    'LazyNuxtWelcome': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
    'LazyNuxtLayout': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
    'LazyNuxtErrorBoundary': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
    'LazyClientOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
    'LazyDevOnly': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
    'LazyServerPlaceholder': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
    'LazyNuxtLink': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
    'LazyNuxtLoadingIndicator': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
    'LazyNuxtImg': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
    'LazyNuxtPicture': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
    'LazyNuxtPage': LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
    'LazyNoScript': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
    'LazyLink': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
    'LazyBase': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
    'LazyTitle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
    'LazyMeta': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
    'LazyStyle': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
    'LazyHead': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
    'LazyHtml': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
    'LazyBody': LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
    'LazyNuxtIsland': LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
    'LazyNuxtRouteAnnouncer': LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const ElementsBackToTop: typeof import("../components/elements/BackToTop.vue")['default']
export const ElementsCounterUp: typeof import("../components/elements/CounterUp.vue")['default']
export const ElementsModalVideo: typeof import("../components/elements/ModalVideo.vue")['default']
export const LayoutFooter1: typeof import("../components/layout/Footer1.vue")['default']
export const LayoutFooter2: typeof import("../components/layout/Footer2.vue")['default']
export const LayoutHeader1: typeof import("../components/layout/Header1.vue")['default']
export const LayoutHeader2: typeof import("../components/layout/Header2.vue")['default']
export const LayoutMenu: typeof import("../components/layout/Menu.vue")['default']
export const LayoutMobileMenu: typeof import("../components/layout/MobileMenu.vue")['default']
export const LayoutPageTitle: typeof import("../components/layout/PageTitle.vue")['default']
export const SectionsHome1About: typeof import("../components/sections/home1/About.vue")['default']
export const SectionsHome1Booking: typeof import("../components/sections/home1/Booking.vue")['default']
export const SectionsHome1Features: typeof import("../components/sections/home1/Features.vue")['default']
export const SectionsHome1News: typeof import("../components/sections/home1/News.vue")['default']
export const SectionsHome1Pricing: typeof import("../components/sections/home1/Pricing.vue")['default']
export const SectionsHome1Room: typeof import("../components/sections/home1/Room.vue")['default']
export const SectionsHome1Services: typeof import("../components/sections/home1/Services.vue")['default']
export const SectionsHome1Slider: typeof import("../components/sections/home1/Slider.vue")['default']
export const SectionsHome1Team: typeof import("../components/sections/home1/Team.vue")['default']
export const SectionsHome1Testimonial: typeof import("../components/sections/home1/Testimonial.vue")['default']
export const SectionsHome1Video: typeof import("../components/sections/home1/Video.vue")['default']
export const SectionsHome2About: typeof import("../components/sections/home2/About.vue")['default']
export const SectionsHome2Booking: typeof import("../components/sections/home2/Booking.vue")['default']
export const SectionsHome2Clients: typeof import("../components/sections/home2/Clients.vue")['default']
export const SectionsHome2Features: typeof import("../components/sections/home2/Features.vue")['default']
export const SectionsHome2News: typeof import("../components/sections/home2/News.vue")['default']
export const SectionsHome2Offer: typeof import("../components/sections/home2/Offer.vue")['default']
export const SectionsHome2Pricing: typeof import("../components/sections/home2/Pricing.vue")['default']
export const SectionsHome2Services: typeof import("../components/sections/home2/Services.vue")['default']
export const SectionsHome2Slider: typeof import("../components/sections/home2/Slider.vue")['default']
export const SectionsHome2Testimonial: typeof import("../components/sections/home2/Testimonial.vue")['default']
export const SectionsHome2Video: typeof import("../components/sections/home2/Video.vue")['default']
export const SectionsInnerpagesAbout: typeof import("../components/sections/innerpages/About.vue")['default']
export const SectionsInnerpagesContact: typeof import("../components/sections/innerpages/Contact.vue")['default']
export const SectionsInnerpagesNewsdetails: typeof import("../components/sections/innerpages/Newsdetails.vue")['default']
export const SectionsInnerpagesNewsgrid: typeof import("../components/sections/innerpages/Newsgrid.vue")['default']
export const SectionsInnerpagesPricing: typeof import("../components/sections/innerpages/Pricing.vue")['default']
export const SectionsInnerpagesRooms: typeof import("../components/sections/innerpages/Rooms.vue")['default']
export const SectionsInnerpagesRoomsdetails: typeof import("../components/sections/innerpages/Roomsdetails.vue")['default']
export const SectionsInnerpagesRoomsuite: typeof import("../components/sections/innerpages/Roomsuite.vue")['default']
export const SectionsInnerpagesTeamdetails: typeof import("../components/sections/innerpages/Teamdetails.vue")['default']
export const SectionsInnerpagesTeamgrid: typeof import("../components/sections/innerpages/Teamgrid.vue")['default']
export const SectionsInnerpagesTestimonial: typeof import("../components/sections/innerpages/Testimonial.vue")['default']
export const SectionsInnerpagesTestimonial2: typeof import("../components/sections/innerpages/Testimonial2.vue")['default']
export const NuxtWelcome: typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']
export const NuxtLayout: typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyElementsBackToTop: LazyComponent<typeof import("../components/elements/BackToTop.vue")['default']>
export const LazyElementsCounterUp: LazyComponent<typeof import("../components/elements/CounterUp.vue")['default']>
export const LazyElementsModalVideo: LazyComponent<typeof import("../components/elements/ModalVideo.vue")['default']>
export const LazyLayoutFooter1: LazyComponent<typeof import("../components/layout/Footer1.vue")['default']>
export const LazyLayoutFooter2: LazyComponent<typeof import("../components/layout/Footer2.vue")['default']>
export const LazyLayoutHeader1: LazyComponent<typeof import("../components/layout/Header1.vue")['default']>
export const LazyLayoutHeader2: LazyComponent<typeof import("../components/layout/Header2.vue")['default']>
export const LazyLayoutMenu: LazyComponent<typeof import("../components/layout/Menu.vue")['default']>
export const LazyLayoutMobileMenu: LazyComponent<typeof import("../components/layout/MobileMenu.vue")['default']>
export const LazyLayoutPageTitle: LazyComponent<typeof import("../components/layout/PageTitle.vue")['default']>
export const LazySectionsHome1About: LazyComponent<typeof import("../components/sections/home1/About.vue")['default']>
export const LazySectionsHome1Booking: LazyComponent<typeof import("../components/sections/home1/Booking.vue")['default']>
export const LazySectionsHome1Features: LazyComponent<typeof import("../components/sections/home1/Features.vue")['default']>
export const LazySectionsHome1News: LazyComponent<typeof import("../components/sections/home1/News.vue")['default']>
export const LazySectionsHome1Pricing: LazyComponent<typeof import("../components/sections/home1/Pricing.vue")['default']>
export const LazySectionsHome1Room: LazyComponent<typeof import("../components/sections/home1/Room.vue")['default']>
export const LazySectionsHome1Services: LazyComponent<typeof import("../components/sections/home1/Services.vue")['default']>
export const LazySectionsHome1Slider: LazyComponent<typeof import("../components/sections/home1/Slider.vue")['default']>
export const LazySectionsHome1Team: LazyComponent<typeof import("../components/sections/home1/Team.vue")['default']>
export const LazySectionsHome1Testimonial: LazyComponent<typeof import("../components/sections/home1/Testimonial.vue")['default']>
export const LazySectionsHome1Video: LazyComponent<typeof import("../components/sections/home1/Video.vue")['default']>
export const LazySectionsHome2About: LazyComponent<typeof import("../components/sections/home2/About.vue")['default']>
export const LazySectionsHome2Booking: LazyComponent<typeof import("../components/sections/home2/Booking.vue")['default']>
export const LazySectionsHome2Clients: LazyComponent<typeof import("../components/sections/home2/Clients.vue")['default']>
export const LazySectionsHome2Features: LazyComponent<typeof import("../components/sections/home2/Features.vue")['default']>
export const LazySectionsHome2News: LazyComponent<typeof import("../components/sections/home2/News.vue")['default']>
export const LazySectionsHome2Offer: LazyComponent<typeof import("../components/sections/home2/Offer.vue")['default']>
export const LazySectionsHome2Pricing: LazyComponent<typeof import("../components/sections/home2/Pricing.vue")['default']>
export const LazySectionsHome2Services: LazyComponent<typeof import("../components/sections/home2/Services.vue")['default']>
export const LazySectionsHome2Slider: LazyComponent<typeof import("../components/sections/home2/Slider.vue")['default']>
export const LazySectionsHome2Testimonial: LazyComponent<typeof import("../components/sections/home2/Testimonial.vue")['default']>
export const LazySectionsHome2Video: LazyComponent<typeof import("../components/sections/home2/Video.vue")['default']>
export const LazySectionsInnerpagesAbout: LazyComponent<typeof import("../components/sections/innerpages/About.vue")['default']>
export const LazySectionsInnerpagesContact: LazyComponent<typeof import("../components/sections/innerpages/Contact.vue")['default']>
export const LazySectionsInnerpagesNewsdetails: LazyComponent<typeof import("../components/sections/innerpages/Newsdetails.vue")['default']>
export const LazySectionsInnerpagesNewsgrid: LazyComponent<typeof import("../components/sections/innerpages/Newsgrid.vue")['default']>
export const LazySectionsInnerpagesPricing: LazyComponent<typeof import("../components/sections/innerpages/Pricing.vue")['default']>
export const LazySectionsInnerpagesRooms: LazyComponent<typeof import("../components/sections/innerpages/Rooms.vue")['default']>
export const LazySectionsInnerpagesRoomsdetails: LazyComponent<typeof import("../components/sections/innerpages/Roomsdetails.vue")['default']>
export const LazySectionsInnerpagesRoomsuite: LazyComponent<typeof import("../components/sections/innerpages/Roomsuite.vue")['default']>
export const LazySectionsInnerpagesTeamdetails: LazyComponent<typeof import("../components/sections/innerpages/Teamdetails.vue")['default']>
export const LazySectionsInnerpagesTeamgrid: LazyComponent<typeof import("../components/sections/innerpages/Teamgrid.vue")['default']>
export const LazySectionsInnerpagesTestimonial: LazyComponent<typeof import("../components/sections/innerpages/Testimonial.vue")['default']>
export const LazySectionsInnerpagesTestimonial2: LazyComponent<typeof import("../components/sections/innerpages/Testimonial2.vue")['default']>
export const LazyNuxtWelcome: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/welcome.vue")['default']>
export const LazyNuxtLayout: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-layout")['default']>
export const LazyNuxtErrorBoundary: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']>
export const LazyClientOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/client-only")['default']>
export const LazyDevOnly: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/dev-only")['default']>
export const LazyServerPlaceholder: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyNuxtLink: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-link")['default']>
export const LazyNuxtLoadingIndicator: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']>
export const LazyNuxtImg: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']>
export const LazyNuxtPicture: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']>
export const LazyNuxtPage: LazyComponent<typeof import("../node_modules/nuxt/dist/pages/runtime/page")['default']>
export const LazyNoScript: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['NoScript']>
export const LazyLink: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Link']>
export const LazyBase: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Base']>
export const LazyTitle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Title']>
export const LazyMeta: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Meta']>
export const LazyStyle: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Style']>
export const LazyHead: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Head']>
export const LazyHtml: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Html']>
export const LazyBody: LazyComponent<typeof import("../node_modules/nuxt/dist/head/runtime/components")['Body']>
export const LazyNuxtIsland: LazyComponent<typeof import("../node_modules/nuxt/dist/app/components/nuxt-island")['default']>
export const LazyNuxtRouteAnnouncer: LazyComponent<IslandComponent<typeof import("../node_modules/nuxt/dist/app/components/server-placeholder")['default']>>

export const componentNames: string[]
