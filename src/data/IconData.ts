import { Feather, Ionicons } from '@expo/vector-icons';
import { ComponentProps } from "react";

interface Props {
  category: { [key: Readonly<string>]: ComponentProps<typeof Ionicons>['name'] };
  account: { readonly [key: string]: ComponentProps<typeof Ionicons>['name'] };
  interface: { [key: string]: ComponentProps<typeof Feather>['name'] };
}

const IconData = {
  category: {
    'airplane': 'airplane',
    'american-football': 'american-football',
    'analytics': 'analytics',
    'aperture': 'aperture',
    'archive': 'archive',
    'barbell': 'barbell',
    'basket': 'basket',
    'baseball': 'baseball',
    'beer': 'beer',
    'bicycle': 'bicycle',
    'boat': 'boat',
    'bonfire': 'bonfire',
    'book': 'book',
    'bus': 'bus',
    'build': 'build',
    'business': 'business',
    'cafe': 'cafe',
    'car': 'car',
    'cart': 'cart',
    'cloud': 'cloud',
    'construct': 'construct',
    'earth': 'earth',
    'fast-food': 'fast-food',
    'film': 'film',
    'fitness': 'fitness',
    'game-controller': 'game-controller',
    'gift': 'gift',
    'git-branch': 'git-branch',
    'glasses': 'glasses',
    'hammer': 'hammer',
    'headset': 'headset',
    'heart': 'heart',
    'home': 'home',
    'ice-cream': 'ice-cream',
    'image': 'image',
    'library': 'library',
    'lock-closed': 'lock-closed',
    'map': 'map',
    'medkit': 'medkit',
    'musical-notes': 'musical-notes',
    'newspaper': 'newspaper',
    'nutrition': 'nutrition',
    'paw': 'paw',
    'pencil': 'pencil',
    'pizza': 'pizza',
    'school': 'school',
    'shirt': 'shirt',
    'trophy': 'trophy',
    'tv': 'tv',
    'umbrella': 'umbrella',
    'watch': 'watch',
    'ellipsis-horizontal': 'ellipsis-horizontal',
    'star': 'star',
    'trending-up': 'trending-up',
    'trending-down': 'trending-down',
    'add-circle': 'add-circle', 
    'cash': 'cash',
    'reload': 'reload',
    'add': 'add'
  },
  account: {
    'card': 'card',
    'cash': 'cash',
    'clipboard': 'clipboard',
    'document': 'document',
    'file-tray-full': 'file-tray-full',
    'flag': 'flag',
    'folder': 'folder',
    'infinite': 'infinite',
    'key': 'key',
    'male': 'male',
    'female': 'female',
    'people': 'people',
    'pricetags': 'pricetags',
    'reader': 'reader',
    'wallet': 'wallet',
    'warning': 'warning',
    'ellipsis-horizontal': 'ellipsis-horizontal',
    'globe': 'globe'
  },
  interface: {
    'eye': 'eye',
    'eye-off': 'eye-off',
    'calendar': 'calendar',
    'chevron-right': 'chevron-right',
    'chevron-left': 'chevron-left',
    'check-square': 'check-square',
    'check-circle': 'check-circle',
    'align-left': 'align-left',
    'settings': 'settings',
    'folder': 'folder',
    'credit-card': 'credit-card',
    'trash': 'trash-2',
    'plus': 'plus',
    'filter': 'filter',
    'refresh-cw': 'refresh-cw',
    'chevron-down': 'chevron-down',
  }
} as const

export default IconData;