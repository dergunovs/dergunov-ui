<script lang="ts">
  import { defineComponent } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "TheToast",

    success(message: string) {
      (this as any).methods.toast("success", message);
    },

    error(message: string) {
      (this as any).methods.toast("error", message);
    },

    info(message: string) {
      (this as any).methods.toast("info", message);
    },

    methods: {
      async toast(type: string, message: string) {
        if (!document.body.contains(document.querySelector(".ui-toast-block")!)) {
          let toastBlock = document.createElement("div");
          toastBlock.classList.add("ui-toast-block");
          document.body.append(toastBlock);
        }

        let toast = document.createElement("div");
        toast.classList.add("ui-toast", `ui-toast-${type}`);
        toast.innerHTML = message;

        document.querySelector(".ui-toast-block")!.append(toast);

        setTimeout(() => toast.classList.add("ui-toast-visible"), 200);

        setTimeout(() => toast.classList.remove("ui-toast-visible"), 2800);

        setTimeout(() => {
          toast.remove();
          if (!document.body.contains(document.querySelector(".ui-toast"))) {
            document.querySelector(".ui-toast-block")!.remove();
          }
        }, 3000);
      },
    },
  });
</script>

<style>
  .ui-toast-block {
    position: fixed;
    top: 32px;
    right: 32px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 8px;
  }

  .ui-toast {
    padding: 16px 32px;
    border-radius: 8px;
    color: var(--color-white);
    max-width: 500px;
    transition: all 300ms;
    opacity: 0;
  }

  .ui-toast-visible {
    opacity: 1;
  }

  .ui-toast-success {
    background-color: var(--color-success);
  }

  .ui-toast-error {
    background-color: var(--color-error);
  }

  .ui-toast-info {
    background-color: var(--color-gray-dark);
  }
</style>
