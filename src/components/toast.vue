<script lang="ts">
  import { defineComponent, ComponentOptions } from "vue";

  export default /*#__PURE__*/ defineComponent({
    name: "toast",

    success(message: string) {
      (this as ComponentOptions).methods.toast("success", message);
    },

    error(message: string) {
      (this as ComponentOptions).methods.toast("error", message);
    },

    info(message: string) {
      (this as ComponentOptions).methods.toast("info", message);
    },

    methods: {
      toast(type: string, message: string): void {
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
    z-index: 999;
  }

  .ui-toast {
    padding: 16px 32px;
    border-radius: 8px;
    color: var(--color-white);
    max-width: 500px;
    transition: all 300ms;
    opacity: 0;
    cursor: default;
  }

  .ui-toast-visible {
    opacity: 1;
  }

  .ui-toast-success {
    background-color: var(--color-success);
  }

  .ui-toast-success:hover {
    background-color: var(--color-success-dark);
  }

  .ui-toast-error {
    background-color: var(--color-error);
  }

  .ui-toast-error:hover {
    background-color: var(--color-error-dark);
  }

  .ui-toast-info {
    background-color: var(--color-gray-dark);
  }

  .ui-toast-info:hover {
    background-color: var(--color-black);
  }
</style>
