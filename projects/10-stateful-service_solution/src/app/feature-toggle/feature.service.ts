import { Injectable } from '@angular/core';

const FEATURE_TOGGLES: Record<string, boolean> = { MESSAGING: true };

@Injectable({
  providedIn: 'root',
})
export class FeatureService {
  constructor() {}

  isEnabled(feature: string): boolean {
    return FEATURE_TOGGLES[feature];
  }
}
