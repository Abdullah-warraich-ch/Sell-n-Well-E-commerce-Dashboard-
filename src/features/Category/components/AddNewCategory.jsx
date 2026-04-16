import React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { X } from "lucide-react";

function AddNewCategory({ open, onOpenChange }) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
        <DialogPrimitive.Content className="fixed top-1/2 left-1/2 z-50 w-[min(92vw,500px)] -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-secondary shadow-2xl outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95">
          <div className="flex max-h-[88vh] flex-col">
            <div className="flex items-start justify-between border-b border-border px-6 py-5">
              <div>
                <DialogPrimitive.Title className="text-[19px] font-semibold text-primary-text tracking-tight">
                  Add New Category
                </DialogPrimitive.Title>
                <DialogPrimitive.Description className="mt-1 text-[13px] font-medium text-secondary-text opacity-90">
                  Create a new category to organize your products.
                </DialogPrimitive.Description>
              </div>
              <DialogPrimitive.Close asChild>
                <button
                  type="button"
                  className="rounded-lg p-2 text-secondary-text transition-colors hover:bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] hover:text-primary-text"
                >
                  <X size={18} />
                </button>
              </DialogPrimitive.Close>
            </div>

            <form className="overflow-y-auto px-6 py-5 space-y-5 home-scrollbar">
              <div>
                <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
                  Category Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. Winter Collection"
                  className="w-full rounded-xl border border-border bg-primary px-3.5 py-3 text-[14px] font-medium text-primary-text outline-none transition-all focus:border-button focus:ring-2 focus:ring-button/20 hover:border-button/40"
                />
              </div>

              <div>
                <label className="mb-1.5 block text-[13px] font-semibold tracking-wide text-secondary-text uppercase">
                  Description
                </label>
                <textarea
                  rows="3"
                  placeholder="Brief description of the category..."
                  className="w-full rounded-xl border border-border bg-primary px-3.5 py-3 text-[14px] font-medium text-primary-text outline-none transition-all focus:border-button focus:ring-2 focus:ring-button/20 hover:border-button/40 resize-none"
                />
              </div>



              <div className="mt-8 flex flex-col-reverse gap-3 border-t border-border pt-5 sm:flex-row sm:justify-end">
                <DialogPrimitive.Close asChild>
                  <button
                    type="button"
                    className="rounded-xl px-5 py-2.5 text-[14px] font-semibold text-secondary-text transition-colors hover:bg-[color-mix(in_srgb,var(--text-primary)_5%,transparent)] hover:text-primary-text"
                  >
                    Cancel
                  </button>
                </DialogPrimitive.Close>
                <button
                  type="submit"
                  className="rounded-xl bg-button px-5 py-2.5 text-[14px] font-semibold text-button-text shadow-sm transition-all hover:bg-button/80 hover:shadow-md"
                >
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default AddNewCategory;
