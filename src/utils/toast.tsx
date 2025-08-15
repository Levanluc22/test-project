import {
  Box,
  UseToastOptions,
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
} from "@chakra-ui/react";
import { useRef } from "react";
import type { FocusableElement } from "@chakra-ui/utils";

export const showCustomToast = (
  toast: any,
  message: string,
  options?: UseToastOptions
) => {
  toast({
    position: "top",
    duration: 2000,
    isClosable: true,
    ...options,
    render: () => (
      <Box
        color="white"
        p={8}
        fontSize="2xl"
        bg="#847553ff"
        borderRadius="lg"
        textAlign="center"
        fontWeight="bold"
        boxShadow="lg"
      >
        {message}
      </Box>
    ),
  });
};

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
  confirmText?: string;
  cancelText?: string;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  onConfirm,
  title = "Xác nhận",
  message = "Bạn có chắc chắn muốn thực hiện thao tác này?",
  confirmText = "Đồng ý",
  cancelText = "Huỷ",
}) => {
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <AlertDialog
      isOpen={isOpen}
      leastDestructiveRef={
        cancelRef as unknown as React.RefObject<FocusableElement>
      }
      onClose={onClose}
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            {title}
          </AlertDialogHeader>
          <AlertDialogBody>{message}</AlertDialogBody>
          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose}>
              {cancelText}
            </Button>
            <Button colorScheme="red" onClick={onConfirm} ml={3}>
              {confirmText}
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
};
