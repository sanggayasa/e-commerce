import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { formatIDR } from '@/lib/utils';

const categories = ['Electronics', 'Accessories', 'Home & Living', 'Fashion'];
const couriers = ['JNE', 'SiCepat', 'GoSend'];

interface ProductFiltersProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  priceRange: [number, number];
  setPriceRange: (range: [number, number]) => void;
  selectedCouriers: string[];
  setSelectedCouriers: (couriers: string[]) => void;
  minRating: number;
  setMinRating: (rating: number) => void;
}

export default function ProductFilters({
  selectedCategory,
  setSelectedCategory,
  priceRange,
  setPriceRange,
  selectedCouriers,
  setSelectedCouriers,
  minRating,
  setMinRating,
}: ProductFiltersProps) {
  return (
    <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
      {/* Category Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(selectedCategory === category ? '' : category)}
              className={`w-full text-left px-3 py-2 rounded-md transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Price Range Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Price Range</h3>
        <div className="space-y-4">
          <Slider
            defaultValue={[0, 5000000]}
            max={5000000}
            step={100000}
            value={priceRange}
            onValueChange={(value) => setPriceRange(value as [number, number])}
          />
          <div className="flex justify-between text-sm">
            <span>{formatIDR(priceRange[0])}</span>
            <span>{formatIDR(priceRange[1])}</span>
          </div>
        </div>
      </div>

      {/* Courier Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Courier Options</h3>
        <div className="space-y-2">
          {couriers.map((courier) => (
            <div key={courier} className="flex items-center space-x-2">
              <Checkbox
                id={courier}
                checked={selectedCouriers.includes(courier)}
                onCheckedChange={(checked) => {
                  if (checked) {
                    setSelectedCouriers([...selectedCouriers, courier]);
                  } else {
                    setSelectedCouriers(selectedCouriers.filter((c) => c !== courier));
                  }
                }}
              />
              <Label htmlFor={courier}>{courier}</Label>
            </div>
          ))}
        </div>
      </div>

      {/* Rating Filter */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Minimum Rating</h3>
        <div className="flex items-center space-x-2">
          <Slider
            defaultValue={[0]}
            max={5}
            step={0.5}
            value={[minRating]}
            onValueChange={(value) => setMinRating(value[0])}
          />
          <span className="min-w-[3ch]">{minRating}</span>
        </div>
      </div>
    </div>
  );
}