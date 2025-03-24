#include <stdio.h>
#include <sys/types.h>
#include <unistd.h>
#include <stdlib.h>

int main()
{
  pid_t pid;
  char *path = "/bin/ps";
  char *argv[5] = {"ps", "-a", "-x", NULL};
  printf("Run ps with execve by child process :\n");
  if ((pid = fork()) < 0)
  {
    printf("fork error !");
    exit(0);
  }
  else if (pid == 0)
  {
    if (execve(path, argv, 0) < 0)
    {
      printf("fork error !");
      exit(0);
    }
    printf("child is ok !\n");
    exit(0);
  }
  wait();
  printf("it is ok !\n");
  exit(0);
  return 0;
}
