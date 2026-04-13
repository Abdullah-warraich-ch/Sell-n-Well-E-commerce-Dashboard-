import React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { ImagePlus, Upload, X } from "lucide-react";

import { SelectAlignItem } from "@/components/forms/Selector";

function AddProductDialog({ open, onOpenChange }) {
  const [previewUrl, setPreviewUrl] = React.useState("");

  React.useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  function handleImageChange(event) {
    const file = event.target.files?.[0];

    if (!file) {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
      setPreviewUrl("");
      return;
    }

    if (previewUrl) {
      URL.revokeObjectURL(previewUrl);
    }

    setPreviewUrl(URL.createObjectURL(file));
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 z-50 w-[min(92vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-secondary shadow-2xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <div className="flex max-h-[88vh] flex-col">
            <div className="flex items-start justify-between border-b border-border px-6 py-5">
              <div>
                <DialogPrimitive.Title className="text-xl font-semibold text-primary-text">
                  Add Perfume Product
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="mt-1 text-sm text-secondary-text">
                  Create a fragrance listing with pricing, notes, bottle
                  details, and stock information.
                </DialogPrimitive.Description>
              </div>
              <DialogPrimitive.Close asChild>
                <button
                  type="button"
                  className="rounded-md p-2 text-secondary-text transition-colors hover:bg-primary hover:text-primary-text"
                >
                  <X size={18} />
                </button>
              </DialogPrimitive.Close>
            </div>

            <form className="overflow-y-auto px-6 py-5">
              <div className="grid gap-5 md:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                      Product Name
                    </label>
                    <input
                      type="text"
                      placeholder="Midnight Oud Extrait"
                      className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Brand
                      </label>
                      <input
                        type="text"
                        placeholder="Maison Lumiere"
                        className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        SKU
                      </label>
                      <input
                        type="text"
                        placeholder="ML-OUDEX-100"
                        className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Price
                      </label>
                      <input
                        type="number"
                        placeholder="12500"
                        className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Stock Quantity
                      </label>
                      <input
                        type="number"
                        placeholder="48"
                        className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Category
                      </label>
                      <SelectAlignItem
                        list={["Men", "Women"]}
                        defaultValue="unisex"
                        defaultValueText="Unisex"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Concentration
                      </label>
                      <SelectAlignItem
                        list={["Eau De Parfum", "Eau De Toilette", "Attar"]}
                        defaultValue="parfum"
                        defaultValueText="Parfum"
                      />
                    </div>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Bottle Size
                      </label>
                      <SelectAlignItem
                        list={["30 ML", "50 ML", "75 ML"]}
                        defaultValue="100 ml"
                        defaultValueText="100 ML"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Fragrance Family
                      </label>
                      <SelectAlignItem
                        list={["Oriental", "Fresh", "Floral", "Amber"]}
                        defaultValue="woody"
                        defaultValueText="Woody"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                      Short Description
                    </label>
                    <textarea
                      rows="3"
                      placeholder="A dense oud-led extrait with warm amber, smoky woods, and a smooth vanilla dry down."
                      className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                    />
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                      Product Image
                    </label>
                    <label className="flex min-h-64 cursor-pointer flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-border bg-primary/60 p-4 text-center transition hover:border-button/60 hover:bg-primary">
                      {previewUrl ? (
                        <img
                          src={previewUrl}
                          alt="Perfume preview"
                          className="h-52 w-full rounded-lg object-cover"
                        />
                      ) : (
                        <>
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
                            <ImagePlus
                              className="text-secondary-text"
                              size={24}
                            />
                          </div>
                          <div>
                            <p className="font-medium text-primary-text">
                              Upload bottle or packaging image
                            </p>
                            <p className="mt-1 text-sm text-secondary-text">
                              PNG or JPG, recommended square crop
                            </p>
                          </div>
                        </>
                      )}
                      <div className="inline-flex items-center gap-2 rounded-md bg-button px-3 py-2 text-sm font-medium text-button-text">
                        <Upload size={16} />
                        Choose Image
                      </div>
                      <input
                        type="file"
                        accept="image/png,image/jpeg,image/webp"
                        className="hidden"
                        onChange={handleImageChange}
                      />
                    </label>
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                      Top Notes
                    </label>
                    <input
                      type="text"
                      placeholder="Saffron, bergamot, pink pepper"
                      className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                      Heart Notes
                    </label>
                    <input
                      type="text"
                      placeholder="Rose, incense, patchouli"
                      className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                    />
                  </div>

                  <div>
                    <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                      Base Notes
                    </label>
                    <input
                      type="text"
                      placeholder="Oud, amber, sandalwood, vanilla"
                      className="w-full rounded-md border border-border bg-primary px-3 py-2.5 text-primary-text outline-none transition focus:ring-1 focus:ring-button"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Longevity
                      </label>
                      <SelectAlignItem
                        list={[
                          "4-6 Hours",
                          "6-8 Hours",
                          "8-12 Hours",
                          "12+ Hours",
                        ]}
                        defaultValue="8-12 hours"
                        defaultValueText="8-12 Hours"
                      />
                    </div>
                    <div>
                      <label className="mb-1.5 block text-sm font-medium text-secondary-text">
                        Sillage
                      </label>
                      <SelectAlignItem
                        list={["Soft", "Moderate", "Strong", "Beast Mode"]}
                        defaultValue="strong"
                        defaultValueText="Strong"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
                <DialogPrimitive.Close asChild>
                  <button
                    type="button"
                    className="rounded-md border border-border px-4 py-2.5 text-sm font-medium text-primary-text transition hover:bg-primary"
                  >
                    Cancel
                  </button>
                </DialogPrimitive.Close>
                <button
                  type="submit"
                  className="rounded-md bg-button px-4 py-2.5 text-sm font-medium text-button-text transition hover:bg-button/80"
                >
                  Add Perfume
                </button>
              </div>
            </form>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default AddProductDialog;
